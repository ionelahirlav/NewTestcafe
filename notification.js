import { notificationPage } from "./notification-page";
const { baseUrl, path, button, notification, closeMessage } = notificationPage;
const expectedNotifications = [
  " Action successful ×",
  " Action unsuccesful, please try again ×"
];


  fixture `Notification Messages`
    .page( baseUrl + path )


  test( "are not displayed by default", async t => {
    await t.expect( notification.exists ).eql( false )
  });


  test( "is displayed after the Click here button is clicked", async t => {
    await t
      .click( button )
      .expect( notification.exists ).eql( true )
  });


  test.skip( "should display one of the two expected texts randomly", async t => {
    for( let i = 0; i < 4; i++ ) {
      await t.click( button )

      const notificationText = await notification.innerText;

      await t.expect( expectedNotifications ).contains( notificationText )
    }
  });


  test.skip( "can be closed", async t => {
    await t
      .maximizeWindow( )
      .click( button )
      .expect( notification.exists ).eql( true )

    await t
      .click( closeMessage )
      .expect( notification.exists ).eql( false )
  });
