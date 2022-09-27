export default {
    firebase : {
        "type": "service_account",
        "project_id": "techwearclubar",
        "private_key_id": "7156ad43c685e9ec30ab4145970c3935b17429d7",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCi76VyUxEln1pl\nom04lG8QECBVsIjirpmcAwyRi7p9xqNKtBkQGOvmU0PRIg4E29/zFLxmTmXgZYHL\n53rj0fcyDqXcyQ/KdkU8w3DpN/m7E5g7gEfGUQmRJ2fVbkqwxZNgZtpIYRMH/GY0\n8R1BOkCw+Q1ttB0FE2r7SoIcL8kD28vAc0CsOfPIrtJ7DqZ+fI9678+SK1fsR1MT\nidMObUj8UZk8SShPf5HUKc68vRgzV+uq/v/K2a9Gq5kbSOtWFy/SAKsrA+rHQamh\nysMg9rXYiCxKYFVSPaw+Z9ajYfn97eKtjD/4EFREYWezbKlcZ4Z/elho6dT080x4\nobGhm15DAgMBAAECggEAAiH/niGsY0lzNo28xbBG4Nje4ImJOSyBIT+KwklJtruB\nGMy8+u7UymrAPUUg0qO5A4GWvnv73NSZ2cz+qcn7154IkuKGkRnQcJJrGOz0uuCs\nLgSvWv5KuYfgmSdG1ZgCmOHYM//5gu5vG4olLs9fG6ziR6sa7TG9o6DRV45SyP+S\nT+OoWPpixl9tJpdWLA4CVNd7BWo9tWnYU8d4palxgFgTj10abq1jRHUmpO1oJKGL\nAp2bhZGpayx5RZkhL4kx+zjmFP/W3fXOAAVDlqjMlm83VueEwWS9mKAc0rbRlDPW\nDcLWCAXgWwf1EYDHvfPqvVNTmXoe7JyUuI5cDIricQKBgQDfLxEhn396V9lNGg7A\n22cc+ECigGsBvlih2VPPnCJN+VXkamLM9RGgioam8lbCr3haHLkX5lcd6PLTaUaS\nWqcqTpW9RtomUzjnovW2+TLPhldG5LxJnLJbChBJ/Un2vQpdEEaPIRdvzDiny2jc\n1pbeTYjMEnVv2bC22kyGgYpZsQKBgQC65MaHnnsso8d9ELDTOwpOdGqg/Lyp7sU4\nLPHO/uvG6FigzAQuO4jS+2AHa7VumBwkzJ9Hc0MYgKUPzmVQExhOY+hwelH/uYd2\nTi289wgXlXql9Le9kQ1vyOXSZ1xpSgABv8egK62+ewjEHpdcuoAjRAJgQS2PFQPx\no2nCUyOAMwKBgA0R9pDfhFmn12P6iK6mqq05pJ9foeSiPxKLZasc261xUqRjzpFu\nMLAULLqOKqKQIB423GgX5zYrND1JRwa/JFcH7yD8iz3/Va/LDVS/10fr+CSAtL4i\n3RcTycxrdu9qNrcogtlS+MplTVQWR3fXYVJ3e/Fni1UXjI/IzP57i5yhAoGBAKIs\nxQ2H+zCISiH/asFQ+SeNI73gskHvXJnbflT1pljq44Vco8AOjzMtSG4IC98VBU71\ndL2GilFnyFPH8OgkObJERb3clu0F7EM/obbY0d/NKSl7Cjnn9bXrqWoDoRAIU6sw\n5KPbYx/oGXo9ZXDksS5o5Hrr9AG15b834xzqEeM7AoGAZ9191+C86HMQ/5ITrAtn\nN25hDhinF1hdov527a+gtScD9++ilA8/1Rs1A2c2xQlho7+4cInOfC9tuhnJW54F\nvhp9o1ZzgUq6PeE5EqGerbwKVp+gn64g53tlcL9RfbQD1j7UmVVtREzIvulzk4Zk\nezi6UvBcjanGAqhX8inSRjU=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-zw6e4@techwearclubar.iam.gserviceaccount.com",
        "client_id": "105255944869399630713",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zw6e4%40techwearclubar.iam.gserviceaccount.com"
    },
    mongodb: {
        connection: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    }
}