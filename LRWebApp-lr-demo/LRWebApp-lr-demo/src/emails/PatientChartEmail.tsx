import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Button,
    Img,
    Link,
} from '@react-email/components';

interface PatientChartEmailProps {
    patientName: string;
    chartId: string;
    downloadUrl: string;
    message?: string;
    senderName?: string;
}

export const PatientChartEmail = ({
    patientName,
    chartId,
    downloadUrl,
    message,
    senderName = 'Luminous Rehab',
}: PatientChartEmailProps) => {
    const previewText = `Patient Chart for ${patientName}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={header}>
                        <Heading style={headerTitle}>Luminous Rehab</Heading>
                    </Section>

                    <Section style={content}>
                        <Heading style={title}>Patient Chart Delivery</Heading>
                        <Text style={paragraph}>
                            A new patient chart has been finalized and is ready for review.
                        </Text>

                        <Section style={infoBox}>
                            <Text style={infoText}><strong>Patient:</strong> {patientName}</Text>
                            <Text style={infoText}><strong>Chart ID:</strong> {chartId}</Text>
                            <Text style={infoText}><strong>Date:</strong> {new Date().toLocaleDateString()}</Text>
                        </Section>

                        {message && (
                            <Section style={messageBox}>
                                <Text style={messageLabel}>Note from sender:</Text>
                                <Text style={messageText}>{message}</Text>
                            </Section>
                        )}

                        <Section style={btnContainer}>
                            <Button style={button} href={downloadUrl}>
                                View & Download Chart PDF
                            </Button>
                        </Section>

                        <Text style={paragraph}>
                            Or copy and paste this link into your browser:
                            <br />
                            <Link href={downloadUrl} style={link}>
                                {downloadUrl}
                            </Link>
                        </Text>

                        <Hr style={hr} />

                        <Text style={footer}>
                            Sent by {senderName} via Luminous Rehab Clinician Portal.
                            <br />
                            This message contains confidential patient information (PHI).
                            If you are not the intended recipient, please delete this email immediately.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default PatientChartEmail;

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    maxWidth: '600px',
};

const header = {
    padding: '32px',
    textAlign: 'center' as const,
    backgroundColor: '#0966CC',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
};

const headerTitle = {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
};

const content = {
    padding: '40px 40px',
};

const title = {
    fontSize: '24px',
    lineHeight: '1.25',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '24px',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#4a4a4a',
    marginBottom: '24px',
};

const infoBox = {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    border: '1px solid #e2e8f0',
};

const infoText = {
    fontSize: '15px',
    lineHeight: '24px',
    color: '#334155',
    margin: '4px 0',
};

const messageBox = {
    backgroundColor: '#fffbeb',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '24px',
    border: '1px solid #fcd34d',
};

const messageLabel = {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#92400e',
    textTransform: 'uppercase' as const,
    marginBottom: '8px',
};

const messageText = {
    fontSize: '15px',
    lineHeight: '24px',
    color: '#92400e',
    margin: '0',
    fontStyle: 'italic',
};

const btnContainer = {
    textAlign: 'center' as const,
    marginBottom: '32px',
};

const button = {
    backgroundColor: '#0966CC',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '14px 32px',
};

const link = {
    color: '#0966CC',
    textDecoration: 'underline',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '32px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
};
