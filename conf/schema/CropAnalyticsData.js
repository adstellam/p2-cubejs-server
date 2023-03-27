cube(`CropAnalyticsData`, {
  sql: `SELECT * FROM apiview.crop_analytics_data`,
  
  preAggregations: {
    cropCountRollup: {
      measures: [
        CUBE.cropCount
      ],
      dimensions: [
        CUBE.cropZoneName
      ],
      timeDimension: CUBE.wetDate,
      granularity: `month`
    }
  },
  
  measures: {
    cropCount: {
      type: `count`,
      sql: `crop_id`,
      drillMembers: [
        CUBE.cropZoneName,
        CUBE.wetDate
      ]
    }
  },
  
  dimensions: {
    organizationId: {
      sql: `organization_id`,
      type: `string`
    },
    growerName: {
      sql: `grower_name`,
      type: `string`
    },
    cropSeason: {
      sql: `crop_season`,
      type: `string`
    },
    cropZoneName: {
      sql: `crop_zone_name`,
      type: `string`
    },
    cropName: {
      sql: `crop_name`,
      type: `string`
    },
    seedType: {
      sql: `seed_type`,
      type: `string`
    },
    wetDate: {
      sql: `wet_date`,
      type: `time`
    }
  }

});
