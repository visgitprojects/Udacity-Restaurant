if (navigator.serviceWorker) {
    navigator.serviceWorker.register('cache.js')
      .then(registration => {
          console.log(`Registration success: ${registration.scope}`);
      }).catch(error => {
          console.log(`Registration failed: ${error}`);
      });
}

