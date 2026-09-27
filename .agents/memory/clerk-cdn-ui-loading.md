---
name: Clerk CDN UI loading
description: Non-obvious initialization required for Clerk prebuilt components in plain browser apps.
---

When using Clerk directly from browser script tags, load the UI bundle from the Clerk frontend API domain before ClerkJS, then call `Clerk.load({ ui: { ClerkUI: window.__internal_ClerkUICtor } })`.

**Why:** Current Clerk browser builds load the core client without prebuilt UI components by default; calling `mountSignIn` or `mountSignUp` otherwise fails with “Clerk was not loaded with Ui components.”

**How to apply:** Decode the publishable key's frontend domain at request time when a static app cannot use a bundler, and keep the publishable key out of committed source.