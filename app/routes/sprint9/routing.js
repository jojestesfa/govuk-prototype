module.exports = function (router) {

  // CHANGE ME TO THE VERSION YOURE WORKING ON
  var version = '/sprint9/';
  var contact = 'contact-an-adviser/';
  var error = 'error/';

  router.post(version + contact + 'select-option', function (req, res) {
    req.session.option = req.body.whyContactUs;
    if (req.session.option == "adviser") {
      res.redirect(301, version + contact + 'contact-an-adviser');
    }
    if (req.session.option == "technical") {
      res.redirect(301, version + contact + 'technical');
    }
    if (req.session.option == "feedback") {
      res.redirect(301, version + contact + 'feedback');
    }
  });

  router.post(version + contact + 'contact-an-adviser', function (req, res) {
    res.redirect(301, version + contact + 'your-details-adviser');
  });

  router.post(version + contact + 'technical', function (req, res) {
    res.redirect(301, version + contact + 'your-details');
  });

  router.post(version + contact + 'feedback', function (req, res) {
    res.redirect(301, version + contact + 'your-details');
  });

  router.post(version + contact + 'your-details', function (req, res) {
    res.redirect(301, version + contact + 'thanks-feedback');
  });

  router.post(version + contact + 'your-details-adviser', function (req, res) {
    res.redirect(301, version + contact + 'thanks-adviser');
  });

  router.post(version + contact + error + 'select-option', function (req, res) {
    req.session.option = req.body.whyContactUs;
    if (req.session.option == "adviser") {
      res.redirect(301, version + contact + error + 'contact-an-adviser');
    }
    if (req.session.option == "technical") {
      res.redirect(301, version + contact + error + 'technical');
    }
    if (req.session.option == "feedback") {
      res.redirect(301, version + contact + error + 'feedback');
    }
  });

  router.post(version + contact + error + 'contact-an-adviser', function (req, res) {
    res.redirect(301, version + contact + error + 'your-details-adviser');
  });

  router.post(version + contact + error + 'technical', function (req, res) {
    res.redirect(301, version + contact + error + 'your-details');
  });

  router.post(version + contact + error + 'feedback', function (req, res) {
    res.redirect(301, version + contact + error + 'your-details');
  });

  router.post(version + contact + error + 'your-details', function (req, res) {
    res.redirect(301, version + contact + error + 'thanks-feedback');
  });

  router.post(version + contact + error + 'your-details-adviser', function (req, res) {
    res.redirect(301, version + contact + error + 'thanks-adviser');
  });

};