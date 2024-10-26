import React, { useState } from "react";
import Capsule, { Environment, CapsuleModal } from "@usecapsule/react-sdk";
// The following styles.css import is not needed if using a version before v3.5.0 of '@usecapsule/react-sdk'
import "@usecapsule/react-sdk/styles.css";

// Initialize Capsule SDK with your API key and environment
// const capsule = new Capsule(Environment.BETA, process.env.CAPSULE_API_KEY);
const capsule = new Capsule(Environment.BETA, process.env.NEXT_PUBLIC_CAPSULE_API_KEY)

function CapsulePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Sign in with Capsule</button>
      <CapsuleModal
        capsule={capsule}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
export default CapsulePage;