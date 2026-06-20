// Sentry must be initialized before any other module is imported so it can
// instrument them. Keep this as the first import in the entry point.
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://bd35b256beed390c7d0b691946232d89@o4511596868599808.ingest.de.sentry.io/4511597478019152",
});
