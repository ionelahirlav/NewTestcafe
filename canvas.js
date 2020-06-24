import { canvasPage } from "./canvas-page";


fixture `Canvas`
  .page( canvasPage.baseUrl + canvasPage.path )


  test.skip( "Reading the content of a canvas page", async t => {
    const canvasInfo = await canvasPage.returnCanvasInfo( );

    //console.log( canvasInfo )
  });
