import { list } from '@keystone-6/core';

import { relationship, text } from '@keystone-6/core/fields';
import { isAdmin } from '../../../utils/accessControl';

export const nodeFirmwareVersion = list({
  ui: {
    labelField: 'version',
    isHidden: true,
    listView: {
      initialColumns: ['version'],
    },
  },
  fields: {
    version: text({           validation: {
            isRequired: true,
          }, isIndexed: 'unique' }),
    pcb_node: relationship({
        ref: 'pcb_node.firmware_version',
        ui: {
            displayMode: 'count',
            createView: {
                fieldMode: 'hidden'
            }
        },
        many: true
    }),
  },
  access: {
    operation: {
      query: isAdmin,
      create: isAdmin,
      update: isAdmin,
      delete: isAdmin,
    }
  },
});
