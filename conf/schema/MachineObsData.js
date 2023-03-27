cube(`MachineObsData`, {

  sql: `SELECT * FROM apiview.machine_obs_data`,
  
  preAggregations: {
    cropCountRollup: {
      measures: [
        CUBE.cropCount
      ],
      dimensions: [
        CUBE.cropName,
        CUBE.cropSeason,
        CUBE.cropZoneName,
        CUBE.farmName,
        CUBE.cropWidthInCm,
        CUBE.cropScoreBand,
        CUBE.seedType,
        CUBE.daysFromWetDate,
        CUBE.insectInfestationType,
        CUBE.fungalInfestationType,
        CUBE.viralInfestationType,
        CUBE.machineUseId
      ]
    },
    avgCropSizeRollup: {
      measures: [
        CUBE.avgCropSize
      ],
      dimensions: [
        CUBE.cropName,
        CUBE.cropSeason,
        CUBE.cropZoneName,
        CUBE.farmName,
        CUBE.seedType,
        CUBE.daysFromWetDate,
        CUBE.insectInfestationType,
        CUBE.fungalInfestationType,
        CUBE.viralInfestationType,
        CUBE.machineUseId
      ]
    },
    avgCropScoreRollup: {
      measures: [
        CUBE.avgCropScore
      ],
      dimensions: [
        CUBE.cropName,
        CUBE.cropSeason,
        CUBE.cropZoneName,
        CUBE.farmName,
        CUBE.seedType,
        CUBE.daysFromWetDate,
        CUBE.insectInfestationType,
        CUBE.fungalInfestationType,
        CUBE.viralInfestationType,
        CUBE.machineUseId
      ]
    }
  },
  
  measures: {
    cropCount: {
      type: `count`,
      sql: `crop_id`,
      filters: [
        { sql: `insect_infestation_infested_area_percentage < 10` },
        { sql: `fungal_infestation_infested_area_percentage < 10` },
        { sql: `viral_infestation_infested_area_percentage < 10` }
      ],
      drillMembers: [
        CUBE.cropZoneName,
        CUBE.farmName
      ]
    },
    avgCropSize: {
      type: `avg`,
      sql: `width_cm`,
      filters: [
        { sql: `insect_infestation_infested_area_percentage < 10` },
        { sql: `fungal_infestation_infested_area_percentage < 10` },
        { sql: `viral_infestation_infested_area_percentage < 10` }
      ]
    },
    avgCropScore: {
      type: `avg`,
      sql: `crop_score`
    }
  },
  
  dimensions: {
    cropName: {
      sql: `crop_name`,
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
    farmName: {
      sql: `farm_name`,
      type: `string`
    },
    seedType: {
      sql: `seed_type`,
      type: `string`
    },
    daysFromWetDate: {
      sql: 'days_from_wet_date',
      type: `number`
    },
    cropWidthInCm: {
      case: {
        when: [
          { sql: `width_cm < 1.5`, label: '1' },
          { sql: `width_cm >= 1.5 AND width_cm < 2.5`, label: '2' },
          { sql: `width_cm >= 2.5 AND width_cm < 3.5`, label: '3' },
          { sql: `width_cm >= 3.5 AND width_cm < 4.5`, label: '4' },
          { sql: `width_cm >= 4.5 AND width_cm < 5.5`, label: '5' },
          { sql: `width_cm >= 5.5 AND width_cm < 6.5`, label: '6' },
          { sql: `width_cm >= 6.5 AND width_cm < 7.5`, label: '7' },
          { sql: `width_cm >= 7.5 AND width_cm < 8.5`, label: '8' },
          { sql: `width_cm >= 8.5 AND width_cm < 9.5`, label: '9' },
          { sql: `width_cm >= 9.5 AND width_cm < 10.5`, label: '10' },
          { sql: `width_cm >= 10.5 AND width_cm < 11.5`, label: '11' },
          { sql: `width_cm >= 11.5 AND width_cm < 12.5`, label: '12' },
          { sql: `width_cm >= 12.5 AND width_cm < 13.5`, label: '13' },
          { sql: `width_cm >= 13.5 AND width_cm < 14.5`, label: '14' },
          { sql: `width_cm >= 14.5 AND width_cm < 15.5`, label: '15' },
          { sql: `width_cm >= 15.5 AND width_cm < 16.5`, label: '16' },
          { sql: `width_cm >= 16.5 AND width_cm < 17.5`, label: '17' },
          { sql: `width_cm >= 17.5 AND width_cm < 18.5`, label: '18' },
          { sql: `width_cm >= 18.5 AND width_cm < 19.5`, label: '19' },
          { sql: `width_cm >= 19.5 AND width_cm < 20.5`, label: '20' },
          { sql: `width_cm >= 20.5 AND width_cm < 21.5`, label: '21' },
          { sql: `width_cm >= 21.5 AND width_cm < 22.5`, label: '22' },
          { sql: `width_cm >= 22.5 AND width_cm < 23.5`, label: '23' },
          { sql: `width_cm >= 23.5 AND width_cm < 24.5`, label: '24' },
          { sql: `width_cm >= 24.5 AND width_cm < 25.5`, label: '25' },
          { sql: `width_cm >= 25.5 AND width_cm < 26.5`, label: '26' },
          { sql: `width_cm >= 26.5 AND width_cm < 27.5`, label: '27' },
          { sql: `width_cm >= 27.5 AND width_cm < 28.5`, label: '28' },
          { sql: `width_cm >= 28.5 AND width_cm < 29.5`, label: '29' },
          { sql: `width_cm >= 29.5 AND width_cm < 30.5`, label: '30' },
          { sql: `width_cm >= 30.5 AND width_cm < 31.5`, label: '31' },
          { sql: `width_cm >= 31.5 AND width_cm < 32.5`, label: '32' },
          { sql: `width_cm >= 32.5 AND width_cm < 33.5`, label: '33' },
          { sql: `width_cm >= 33.5 AND width_cm < 34.5`, label: '34' },
          { sql: `width_cm >= 34.5 AND width_cm < 35.5`, label: '35' },
          { sql: `width_cm >= 35.5 AND width_cm < 36.5`, label: '36' },
          { sql: `width_cm >= 36.5 AND width_cm < 37.5`, label: '37' },
          { sql: `width_cm >= 37.5 AND width_cm < 38.5`, label: '38' },
          { sql: `width_cm >= 38.5 AND width_cm < 39.5`, label: '39' },
          { sql: `width_cm >= 39.5 AND width_cm < 40.5`, label: '40' },
          { sql: `width_cm >= 40.5 AND width_cm < 41.5`, label: '41' },
          { sql: `width_cm >= 41.5 AND width_cm < 42.5`, label: '42' },
          { sql: `width_cm >= 42.5 AND width_cm < 43.5`, label: '43' },
          { sql: `width_cm >= 43.5 AND width_cm < 44.5`, label: '44' },
          { sql: `width_cm >= 44.5 AND width_cm < 45.5`, label: '45' },
          { sql: `width_cm >= 45.5 AND width_cm < 46.5`, label: '46' },
          { sql: `width_cm >= 46.5 AND width_cm < 47.5`, label: '47' },
          { sql: `width_cm >= 47.5 AND width_cm < 48.5`, label: '48' },
          { sql: `width_cm >= 48.5 AND width_cm < 49.5`, label: '49' },
          { sql: `width_cm >= 49.5`, label: '50' }
        ], 
        else: { label: '0' }
      },
      type: `string`
    },
    cropScoreBand: {
      case: {
        when: [
          { sql: `crop_score < 5`, label: '0' },
          { sql: `crop_score >= 5 AND crop_score < 15`, label: '10' },
          { sql: `crop_score >= 15 AND crop_score < 3.5`, label: '20' },
          { sql: `crop_score >= 25 AND crop_score < 4.5`, label: '30' },
          { sql: `crop_score >= 35 AND crop_score < 5.5`, label: '40' },
          { sql: `crop_score >= 45 AND crop_score < 6.5`, label: '50' },
          { sql: `crop_score >= 55 AND crop_score < 7.5`, label: '60' },
          { sql: `crop_score >= 65 AND crop_score < 8.5`, label: '70' },
          { sql: `crop_score >= 75 AND crop_score < 9.5`, label: '80' },
          { sql: `crop_score >= 85 AND crop_score < 10.5`, label: '90' },
          { sql: `crop_score >= 95`, label: '100' }
        ], 
        else: { label: '0' }
      },
      type: `string`
    },
    insectInfestationType: {
      sql: `insect_infestation_type`,
      type: `string`
    },
    fungalInfestationType: {
      sql: `fungal_infestation_type`,
      type: `string`
    },
    viralInfestationType: {
      sql: `viral_infestation_type`,
      type: `string`
    },
    machineUseId: {
      sql: `machine_use_id`,
      type: `string`
    }
  },
  
  dataSource: `default`

});
