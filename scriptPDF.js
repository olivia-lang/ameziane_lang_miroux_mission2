function printToPDF() {
  console.log('converting...');

  var printableArea = document.getElementById('printable');

  html2canvas(printableArea, {
    useCORS: true,
    onrendered: function(canvas) {

      var pdf = new jsPDF('p', 'pt', 'letter');

      var pageHeight = 3000;
      var pageWidth = 3000;
      for (var i = 0; i <= printableArea.clientHeight / pageHeight; i++) {
        var srcImg = canvas;
        var sX = 0;
        var sY = pageHeight * i; // start 1 pageHeight down for every new page
        var sWidth = pageWidth;
        var sHeight = pageHeight;
        var dX = 0;
        var dY = 0;
        var dWidth = pageWidth;
        var dHeight = pageHeight;

        window.onePageCanvas = document.createElement("canvas");
        onePageCanvas.setAttribute('width', pageWidth);
        onePageCanvas.setAttribute('height', pageHeight);
        var ctx = onePageCanvas.getContext('2d');
        ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);

        var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
        var width = onePageCanvas.width;
        var height = onePageCanvas.clientHeight;

        if (i > 0) // if we're on anything other than the first page, add another page
          pdf.addPage(612, 791); // 8.5" x 11" in pts (inches*72)

        pdf.setPage(i + 1); // now we declare that we're working on that page
        pdf.addImage(canvasDataURL, 'PNG',2,2,1200,1500); // add content to the page

      }
      pdf.save('test.pdf');
    }
  });
}
