import { list } from '@keystone-next/keystone';

import { float, text, timestamp, relationship } from '@keystone-next/keystone/fields';
import { relationshipRequiredCheckerHook } from '../../hooks/relationshipRequiredCheckerHook';

export const hardwareIssue = list({
    ui: {
      listView: {
        initialColumns: ['creationDate', 'diagnosticDate','closeIssueDate','TTR', 'observations'],
      },
    },
    hooks: {
      validateInput: relationshipRequiredCheckerHook('irrigator'),
    },
    fields: {
      creationDate:  timestamp({ isRequired: true }),
      diagnosticDate:  timestamp({ isRequired: true }),
      closeIssueDate: timestamp({ isRequired: false }),
      TTR: float(),
      grafanaLink: text(),
      observations: text(),
      irrigator: relationship({
        ref: 'Irrigator.hdwIssue',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'lat', 'long', 'status'],
          linkToItem: true,
          inlineConnect: true,
        },
        many: true,
      }),
      repair: relationship({
        ref: 'Repair.hdwIssue',
        ui: {
          displayMode: 'cards',
          cardFields: ['date', 'status'],
          linkToItem: true,
          inlineConnect: true,
        },
        many: false,
      }),
      hdwIssueStatus: relationship({
        ref: 'HdwIssueStatus',
        ui: {
          displayMode: 'select',
          labelField: 'name'
        },
        many: false
      }),
      diagnosticType: relationship({
        ref: 'DiagnosticType.hdwIssue',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'type'],
          linkToItem: true,
          inlineConnect: true,
        },
        many: false,
      }),
    },
  });