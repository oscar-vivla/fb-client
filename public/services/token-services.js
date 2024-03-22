function sendTokenToFirebase(currentToken) {
  console.log("send to firebase server...", currentToken);
  axios
    .get("https://registerdevicetoken-dnj5lz6l2q-uc.a.run.app", {
      params: {
        token: currentToken,
      },
    })
    .then((item) => {
      console.log(item);
    });
}
