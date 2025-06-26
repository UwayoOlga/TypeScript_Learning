/*
3. **ask:** Define a discriminated union `Notification`:
    
    ```tsx
    type Notification = 
      | { type: 'email'; to: string; subject: string; }
      | { type: 'sms'; to: string; phone: string; }
      | { type: 'push'; to: string; deviceId: string; };
    ```
    
    Write function `sendNotification(n: Notification): void` using `switch(n.type)`. For each case, log a message including all relevant fields.
    
    Add an `assertNever(x: never): never` helper, and call it in `default:` to enforce exhaustive handling.
     */
    type Notification = 
  | { type: 'email'; to: string; subject: string }
  | { type: 'sms'; to: string; phone: string }
  | { type: 'push'; to: string; deviceId: string };

function sendNotification(n: Notification): void {
  switch (n.type) {
    case 'email':
      console.log(`Sending EMAIL to ${n.to} with subject "${n.subject}"`);
      break;
    case 'sms':
      console.log(`Sending SMS to ${n.to} at phone number ${n.phone}`);
      break;
    case 'push':
      console.log(`Sending PUSH notification to ${n.to} on device ${n.deviceId}`);
      break;
    default:
      assertNever(n);//The type never means a value that should never occur. If n is truly a Notification and all cases are handled, default: should never run.
  }
}

function assertNever(x: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(x)}`);
}//
