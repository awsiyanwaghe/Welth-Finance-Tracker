import { Body, Button, Html, Preview } from "@react-email/components";
import Head from "next/head";
import * as React from "react";

export default function Email({
  userName = "",
  type = "budget-alert",
  data = {},
}) {

    if(type === 'monthly-report'){
        return (
          <Html>
            <Button
              href="https://example.com"
              style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
            >
              Click me
            </Button>
          </Html>
        );
        
    }

    if(type === 'budget-alert'){
        return (
            <Html>
                <Head/>
                <Preview/>
                <Body style={styles.body}></Body>
            </Html>
        )
    }
}

const styles = {
    body: {
        backgroundColor: "#f6f9f9",
    }
}