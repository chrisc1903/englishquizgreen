# English Quiz

## Run locally on Replit

The project is a static browser quiz served by `server.py`:

```bash
python3 server.py
```

The `Start application` workflow runs this command on port 5000.

## Authentication

The app uses Replit-managed Clerk authentication. The server injects the
automatically provisioned `VITE_CLERK_PUBLISHABLE_KEY` into the browser page
at request time; no auth keys are committed to the repository. Users must
sign in or create an account before they can access the quiz sets.