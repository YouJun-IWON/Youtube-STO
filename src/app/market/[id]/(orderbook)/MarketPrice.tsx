import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5stock from '@amcharts/amcharts5/stock';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { data } from './example';

import am5locales_ko_KR from '@amcharts/amcharts5/locales/ko_KR';

const MarketPrice = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([am5themes_Animated.new(root)]);

    const stockChart = root.container.children.push(
      am5stock.StockChart.new(root, {})
    );

    root.numberFormatter.set('numberFormat', '#,###.00');

    const mainPanel = stockChart.panels.push(
      am5stock.StockPanel.new(root, {
        wheelY: 'zoomX',
        panX: true,
        panY: true,
        height: am5.percent(70),
      })
    );

    const valueAxis = mainPanel.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          pan: 'zoom',
        }),
        extraMin: 0.1, //!
        tooltip: am5.Tooltip.new(root, {}),
        numberFormat: '#,###.00',
        extraTooltipPrecision: 2,
      })
    );

    const dateAxis = mainPanel.xAxes.push(
      am5xy.GaplessDateAxis.new(root, {
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        groupData: true,
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const valueSeries = mainPanel.series.push(
      am5xy.CandlestickSeries.new(root, {
        name: '** STO',
        clustered: false, //!
        valueXField: 'Date',
        valueYField: 'Close',
        highValueYField: 'High',
        lowValueYField: 'Low',
        openValueYField: 'Open',
        calculateAggregates: true,
        xAxis: dateAxis,
        yAxis: valueAxis,
        legendValueText:
          'open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]',
        legendRangeValueText: '', //!
      })
    );

    stockChart.set('stockSeries', valueSeries);

    const valueLegend = mainPanel.plotContainer.children.push(
      am5stock.StockLegend.new(root, {
        stockChart: stockChart,
      })
    );
    valueLegend.data.setAll([valueSeries]);

    let volumeAxisRenderer = am5xy.AxisRendererY.new(root, {
      inside: true,
    });

    volumeAxisRenderer.labels.template.set('forceHidden', true);
    volumeAxisRenderer.grid.template.set('forceHidden', true);

    let volumeValueAxis = mainPanel.yAxes.push(
      am5xy.ValueAxis.new(root, {
        numberFormat: '#.#a',
        height: am5.percent(20),
        y: am5.percent(100),
        centerY: am5.percent(100),
        renderer: volumeAxisRenderer,
      })
    );

    let volumeSeries = mainPanel.series.push(
      am5xy.ColumnSeries.new(root, {
        name: '거래량',
        clustered: false,
        valueXField: 'Date',
        valueYField: 'Volume',
        xAxis: dateAxis,
        yAxis: volumeValueAxis,
        legendValueText: "[bold]{valueY.formatNumber('#,###.0a')}[/]",
      })
    );

    volumeSeries.columns.template.setAll({
      strokeOpacity: 0,
      fillOpacity: 0.5,
    });

    // color columns by stock rules
    volumeSeries.columns.template.adapters.add('fill', function (fill, target) {
      let dataItem = target.dataItem;
      if (dataItem) {
        return stockChart.getVolumeColor(dataItem);
      }
      return fill;
    });

    stockChart.set('volumeSeries', volumeSeries);
    valueLegend.data.setAll([valueSeries, volumeSeries]);

    mainPanel.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        yAxis: valueAxis,
        xAxis: dateAxis,
        snapToSeries: [valueSeries],
        snapToSeriesBy: 'y!',
      })
    );

    const scrollbar = mainPanel.set(
      'scrollbarX',
      am5xy.XYChartScrollbar.new(root, {
        orientation: 'horizontal',
        height: 50,
      })
    );
    stockChart.toolsContainer.children.push(scrollbar);

    const sbDateAxis = scrollbar.chart.xAxes.push(
      am5xy.GaplessDateAxis.new(root, {
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    const sbValueAxis = scrollbar.chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    var sbSeries = scrollbar.chart.series.push(
      am5xy.LineSeries.new(root, {
        valueYField: 'Close',
        valueXField: 'Date',
        xAxis: sbDateAxis,
        yAxis: sbValueAxis,
      })
    );

    sbSeries.fills.template.setAll({
      visible: true,
      fillOpacity: 0.3,
    });

    // Set up series type switcher
    // -------------------------------------------------------------------------------
    // https://www.amcharts.com/docs/v5/charts/stock/toolbar/series-type-control/

    let seriesSwitcher = am5stock.SeriesTypeControl.new(root, {
      stockChart: stockChart,
    });

    seriesSwitcher.events.on('selected', function (ev: any) {
      setSeriesType(ev.item.id);
    });

    function getNewSettings(series: any) {
      let newSettings: any = {}; // Use object instead of array
      am5.array.each(
        [
          'name',
          'valueYField',
          'highValueYField',
          'lowValueYField',
          'openValueYField',
          'calculateAggregates',
          'valueXField',
          'xAxis',
          'yAxis',
          'legendValueText',
          'stroke',
          'fill',
        ],
        function (setting: any) {
          newSettings[setting] = series.get(setting);
        }
      );
      return newSettings;
    }

    function setSeriesType(seriesType: any) {
      // Get current series and its settings
      let currentSeries = stockChart.get('stockSeries');
      let newSettings = getNewSettings(currentSeries);

      // Remove previous series
      let data = currentSeries?.data.values;
      mainPanel.series.removeValue(currentSeries!);

      // Create new series
      let series;
      switch (seriesType) {
        case 'line':
          series = mainPanel.series.push(
            am5xy.LineSeries.new(root, newSettings)
          );
          break;
        case 'candlestick':
        case 'procandlestick':
          newSettings.clustered = false;
          series = mainPanel.series.push(
            am5xy.CandlestickSeries.new(root, newSettings)
          );
          if (seriesType == 'procandlestick') {
            series.columns?.template?.get('themeTags')?.push('pro');
          }
          break;
        case 'ohlc':
          newSettings.clustered = false;
          series = mainPanel.series.push(
            am5xy.OHLCSeries.new(root, newSettings)
          );
          break;
      }

      // Set new series as stockSeries
      if (series) {
        valueLegend.data.removeValue(currentSeries);
        series.data.setAll(data!);
        stockChart.set('stockSeries', series);
        let cursor = mainPanel.get('cursor');
        if (cursor) {
          cursor.set('snapToSeries', [series]);
        }
        valueLegend.data.insertIndex(0, series);
      }
    }

    let tooltip = am5.Tooltip.new(root, {
      getStrokeFromSprite: false,
      getFillFromSprite: false,
    });

    tooltip?.get('background')?.setAll({
      strokeOpacity: 1,
      stroke: am5.color(0x000000),
      fillOpacity: 1,
      fill: am5.color(0xffffff),
    });
    //TODO: open when build
    let toolbar = am5stock.StockToolbar.new(root, {
      container: document.getElementById('chartcontrols')!,
      stockChart: stockChart,
      controls: [
        am5stock.IndicatorControl.new(root, {
          stockChart: stockChart,
          legend: valueLegend,
        }),
        am5stock.DateRangeSelector.new(root, {
          stockChart: stockChart,
        }),
        am5stock.PeriodSelector.new(root, {
          stockChart: stockChart,
        }),
        seriesSwitcher,
        am5stock.DrawingControl.new(root, {
          stockChart: stockChart,
        }),
        am5stock.ResetControl.new(root, {
          stockChart: stockChart,
        }),
        am5stock.SettingsControl.new(root, {
          stockChart: stockChart,
        }),
      ],
    });

    //! example data
    valueSeries.data.setAll(data);
    volumeSeries.data.setAll(data);
    sbSeries.data.setAll(data);

    root.locale = am5locales_ko_KR;
    root.language.setTranslationsAny({
      "Increase": "증가",
      "Decrease": "감소",
      "Save": "적용",
      "Cancel": "취소",
      "Indicators": "지표들",
      "Draw": "그리기"
    });

    return () => {
      if (root !== null) root.dispose();
      stockChart.dispose();
    };
    // if (root !== null) root.dispose();
  }, []);

  return (
    <>
      <div
        id='chartcontrols'
        style={{ height: 'auto', padding: '5px 45px 0 15px' }}
      ></div>
      <div id='chartdiv' style={{ width: '100%', height: '500px' }} ></div>
    </>
  );
};

export default MarketPrice;

//! Function that dynamically loads data (not used)
// function loadData(ticker: any, series: any) {
//   // Load external data
//   // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Setting_data
//   am5.net
//     .load(
//       'https://www.amcharts.com/wp-content/uploads/assets/docs/stock/' +
//         ticker +
//         '.csv'
//     )
//     .then(function (result: any) {
//       // Parse loaded data
//       var data = am5.CSVParser.parse(result.response, {
//         delimiter: ',',
//         skipEmpty: true,
//         useColumnNames: true,
//       });

//       // Process data (convert dates and values)
//       var processor = am5.DataProcessor.new(root, {
//         dateFields: ['Date'],
//         dateFormat: 'yyyy-MM-dd',
//         numericFields: [
//           'Open',
//           'High',
//           'Low',
//           'Close',
//           'Adj Close',
//           'Volume',
//         ],
//       });
//       processor.processMany(data);

//       // Set data
//       am5.array.each(series, function (item: any) {
//         item.data.setAll(data);
//       });
//     });
// }

// Load initial data for the first series
// loadData('MSFT', [valueSeries, sbSeries]);
