cube(`MachineTelematicsData`, {

  sql: `SELECT * FROM apiview.machine_telematics_data`,
  
  preAggregations: {
    avgSpeedRollup: {
      measures: [
        CUBE.avgSpeed
      ],
      dimensions: [
        CUBE.machineName
      ],
      timeDimension: CUBE.ts,
      granularity: `minute`
    }
  },
  
  measures: {
    avgSpeed: {
      type: `avg`,
      sql: `odometer_meter_per_second`
    }
  },
  
  dimensions: {
    machineName: {
      sql: `machine_name`,
      type: `string`
    },
    ts: {
      sql: `ts`,
      type: `time`
    }
  }

});
