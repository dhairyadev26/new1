import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container my-5">
            <h2 className="text-center mb-4">niyu baby;</h2>

            <h3 className="text-center mb-4">Terms and Conditions of Use for [Your App Name]<br/>
            <small>Effective Date: [Date]</small></h3>

            <p className="lead mb-5 text-center">
                These Terms and Conditions ("Terms") govern your use of [Your App Name] ("we," "our," or "us"). By accessing or using our web app, you agree to these Terms.
            </p>

            <h4 className="mb-3">1. Use of the Platform</h4>
            <p><b>Eligibility:</b> You must be at least [age] years old to use our platform. By using the platform, you confirm that you meet this requirement.</p>
            <p><b>Account Responsibility:</b> You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>

            <h4 className="mt-5 mb-3">2. Skill Exchanges</h4>
            <p><b>Agreement:</b> Any skill exchange arranged through our platform is between users. We are not responsible for the quality or outcome of these exchanges.</p>
            <p><b>Fees:</b> Any fees associated with skill exchanges are outlined on the platform and are subject to change.</p>

            <h4 className="mt-5 mb-3">3. Prohibited Activities</h4>
            <p><b>Illegal Activities:</b> You agree not to engage in any illegal activities or use the platform for unlawful purposes.</p>
            <p><b>Misuse:</b> Do not misuse the platform, including but not limited to, spamming, harassment, or posting inappropriate content.</p>

            <h4 className="mt-5 mb-3">4. Intellectual Property</h4>
            <p><b>Ownership:</b> All content, trademarks, and other intellectual property on the platform are owned by us or our licensors. You may not use, reproduce, or distribute this content without permission.</p>

            <h4 className="mt-5 mb-3">5. Limitation of Liability</h4>
            <p><b>No Warranty:</b> The platform is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use the platform.</p>
            <p><b>Indemnification:</b> You agree to indemnify and hold us harmless from any claims, losses, or damages arising from your use of the platform.</p>

            <h4 className="mt-5 mb-3">6. Termination</h4>
            <p>We reserve the right to suspend or terminate your account and access to the platform if you violate these Terms.</p>

            <h4 className="mt-5 mb-3">7. Governing Law</h4>
            <p>These Terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these Terms will be resolved in the courts of [Your Jurisdiction].</p>

            <h4 className="mt-5 mb-3">8. Changes to These Terms</h4>
            <p>We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the platform constitutes acceptance of the revised Terms.</p>

            <h4 className="mt-5 mb-3">9. Contact Us</h4>
            <p>If you have any questions about these Terms, please contact us at [contact email].</p>

            <div className="text-center mt-5">
                <button className="btn btn-primary" onClick={() => window.history.back()}>
                    Accept
                </button>
            </div>
        </div>
  );
}

export default App;