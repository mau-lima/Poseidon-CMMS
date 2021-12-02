import { createSchema, list } from '@keystone-next/keystone';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-next/keystone/fields';
import { document } from '@keystone-next/fields-document';
import { irrigator } from './schemas/irrigator'; 
import { gateway } from './schemas/assets/gateway/gateway'; 
import { gpsNode } from './schemas/assets/gpsNode/gpsNode';
import { hardwareIssue } from './schemas/workOrders/hdwIssue'; 
import { field as fieldDomainEntity } from './schemas/field'
import { installUninstallRequest } from './schemas/workOrders/installUninstallRequest';
import { city } from './schemas/city';
import { fieldTechnician } from './schemas/users/fieldTechnician';
import { province } from './schemas/province';
import { zone } from './schemas/zone';
import { client } from './schemas/client';
import { gatewayHousingType } from './schemas/assets/gateway/gatewayHousingType';
import { satelliteModem } from './schemas/assets/gateway/satelliteModem';
import { satelliteModemType } from './schemas/assets/gateway/sateliteModemType';
import { satelliteAntenna } from './schemas/assets/gateway/satelliteAntenna';
import { batteryType } from './schemas/assets/gpsNode/batteryType';
import { gpsAntennaType } from './schemas/assets/gpsNode/gpsAntennaType';
import { nodeHousingType } from './schemas/assets/gpsNode/nodeHousingType';
import { loraAntennaType } from './schemas/assets/loraAntennaType';
import { solarPanelType } from './schemas/assets/gpsNode/solarPanelType';
import { pcbNode } from './schemas/assets/gpsNode/pcbNode';
import { nodeFirmwareVersion } from './schemas/assets/gpsNode/nodeFirmwareVersion';
import { nodeHardwareVersion } from './schemas/assets/gpsNode/nodeHardwareVersion';
import { pcbGateway } from './schemas/assets/gateway/pcbGateway';
import { gatewayFirmwareVersion } from './schemas/assets/gateway/gatewayFirmwareVersion';
import { gatewayHardwareVersion } from './schemas/assets/gateway/gatewayHardwareVersion';
import { assetType } from './schemas/assets/assetType';
import { workOrder } from './schemas/workOrders/workOrder';
import { fieldTechnicianWageType } from './schemas/users/fieldTechnicianWageType';
import { pressureSensorType } from './schemas/assets/pressureSensor/pressureSensorType';
import { pressureSensor } from './schemas/assets/pressureSensor/pressureSensor';
import { repair } from './schemas/workOrders/repair';

export const lists = createSchema({
  Irrigator: irrigator,
  Gateway: gateway,
  GpsNode: gpsNode,
  Field: fieldDomainEntity,
  InstallUninstallRequest: installUninstallRequest,
  City: city,
  FieldTechnician: fieldTechnician,
  HdwIssue: hardwareIssue,
  Province: province,
  Zone: zone,
  Client: client,
  GatewayHousingType: gatewayHousingType,
  SatelliteModem: satelliteModem,
  SatelliteModemType: satelliteModemType,
  SatelliteAntenna: satelliteAntenna,
  BatteryType: batteryType,
  GpsAntennaType: gpsAntennaType,
  NodeHousingType: nodeHousingType,
  LoraAntennaType: loraAntennaType,
  SolarPanelType: solarPanelType,
  PcbNode: pcbNode,
  NodeFirmwareVersion: nodeFirmwareVersion,
  NodeHardwareVersion: nodeHardwareVersion,
  PcbGateway: pcbGateway,
  GatewayFirmwareVersion: gatewayFirmwareVersion,
  GatewayHardwareVersion: gatewayHardwareVersion,
  AssetType: assetType,
  WorkOrder: workOrder,
  FieldTechnicianWageType: fieldTechnicianWageType,
  PressureSensorType: pressureSensorType,
  PressureSensor: pressureSensor,
  Repair: repair,

  User: list({
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      email: text({
        isRequired: true,
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ isRequired: true }),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
  }),
  Post: list({
    fields: {
      title: text(),
      status: select({
        options: [
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' },
        ],
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      publishDate: timestamp(),
      author: relationship({
        ref: 'User.posts',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineCreate: { fields: ['name', 'email'] },
        },
      }),
      tags: relationship({
        ref: 'Tag.posts',
        ui: {
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ['name'] },
        },
        many: true,
      }),
    },
  }),
  Tag: list({
    ui: {
      isHidden: true,
    },
    fields: {
      name: text(),
      posts: relationship({
        ref: 'Post.tags',
        many: true,
      }),
    },
  }),
});