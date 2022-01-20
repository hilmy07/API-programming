$.ajax({
  url: "https://indodax.com/api/summaries",
  success: function (result) {
    var data;
    var row;
    var no = 1;

    for (data in result.tickers) {
      row = `
            <tr>
              // No
                <td>` + no++ + `</td>

              // Nama
                <td>` + result.tickers[data].name.toUpperCase() +`</td>

              // Last
              <td class="last">` + "Rp " + result.tickers[data].last.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + `</td>
                
              //  High
                <td class="high">` + "Rp " + result.tickers[data].high.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + `</td>

              // Low
                <td class="low">` + "Rp " + result.tickers[data].low.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + `</td>

              // Buy
                <td>` + "Rp " + result.tickers[data].buy.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + `</td>

              // Sell
                <td>` + "Rp " + result.tickers[data].sell.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + `</td>

                
            </tr>`
        
            $('#data_tickers tr:last').after(row);
    }
  }
});

