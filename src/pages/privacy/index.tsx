import { useWindowResize } from "../../hooks/useWindowResize";
import React from 'react';
import styles from './privacy.module.css';

const Privacy: React.FC = () => {
  useWindowResize(() => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  }, 300);

  return (
    <div className="cyberpunk-bg text-white" style={{ margin: '4rem' }}>
      <div className={styles.title}>Privacy Policy</div>
      <div className={styles.text}>
        The following Privacy Policy governs the online information collection practices of Xplore3 (“Company,” "we" or "us"). It outlines the types of information that we gather about you while you are using our websites <a href="https://ai.xplore3.com" target="_blank" className={styles.highlight}>https://ai.xplore3.com</a>, or the Chrome extension (the "Sites") and the ways in which we use this information. Xplore3 is a web-based AI Agent which helps users who have created Xplore3 accounts (“User(s)”) to share their content such as information, files, and folders (“Content”) and analyze their pre-existing customers, prospective customers, and third parties (“Viewer(s)”) on the basis of the content viewed by them. Viewers are the non-registered users of the web-services and product offerings (“Service(s)”) provided by Xplore3. We process your data in accordance with applicable laws and regulations, following industry best practices.
      </div>
      <div className={styles.text}>
        When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email or home address.
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Purpose and Scope</div>
        <div className={styles.text}>
          This Privacy Policy applies primarily to information that we collect online; however, it may apply to some of the data that you provide to us offline and/or through other means (e.g., telephone or mail). It documents how our organization collects information from Users/Viewers of our Services. While providing our Services on behalf of our registered users, we collect information related to Viewers. The use of information collected on behalf of our Users is governed by our contract with them and their organization’s privacy policies. We are not accountable for the privacy policies and practices undertaken by our Users or any other third parties.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>How We Collect Data About You</div>
        <div className={styles.text}>
          We may collect data from or about you depending on how you use the Sites.
        </div>
        <div className={styles.subTitle}>1. Data Provided by Registered Users</div>
        <div className={styles.text}>
          Account Creation and Login: Personal information such as first name, last name, and email address.
        </div>
        <div className={styles.subTitle}>2. Data Provided by Non-Registered Users</div>
        <div className={styles.text}>
          Accessing Pre-Existing User’s Content: Users may ask for personal information such as an email address to open a link. Xplore3 collects and stores this personal information on behalf of its Users in accordance with their privacy policies.
        </div>
        <div className={styles.subTitle}>3. Data Collected Through Automated Means</div>
        <div className={styles.text}>
          System Data: Includes technical data about your device (e.g., device type, operating system, system language). This helps improve our services and measure traffic.
        </div>
        <div className={styles.subTitle}>4. User-Generated Data</div>
        <div className={styles.text}>
          Information and materials (e.g., text, photos, videos) voluntarily provided by Users or Viewers, associated with accounts or emails used.
        </div>
        <div className={styles.subTitle}>5. Data Collected from Third Parties</div>
        <div className={styles.text}>
          Cloud Storage Integrations: When connected, we access files from cloud storage (e.g., Google Drive) to facilitate services.
        </div>
        <div className={styles.subTitle}>6. Data Collected During Transactions</div>
        <div className={styles.text}>
          Includes service type, promotion codes, order details, payment information, and transaction details.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Types of Information We Collect and Store</div>
        <div className={styles.text}>
          We may collect and store the following personal information:
        </div>
        <ul>
          <li>First name and last name</li>
          <li>Email address</li>
          <li>TimeZone/Location</li>
          <li>System Language</li>
          <li>Wallet Address authed by user</li>
          <li>Twitter account and user information</li>
          <li>Google account and user information</li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>How We Use Your Personal Information</div>
        <div className={styles.text}>
          We use the above personal information for:
        </div>
        <ul>
          <li>Providing information about our offerings and periodic newsletters.</li>
          <li>Responding to your requests.</li>
          <li>Business intelligence or data analytics.</li>
          <li>Managing relationships with you.</li>
          <li>Internal record-keeping.</li>
          <li>Identity verification.</li>
          <li>Improving our website.</li>
          <li>Providing subscription services.</li>
          <li>Complying with legal or statutory obligations.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Data Access Within Our Organization</div>
        <div className={styles.text}>
          Access to your data is limited to those who need it to provide the Products and Services, manage inquiries, or process refunds. Teams with access include marketing, development, customer support, and executive staff.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Data Sharing Outside Our Organization</div>
        <div className={styles.text}>
          1. Processors: We may use third-party service providers for payment processing, email transmission, hosting, analytics, and customer support. They process your data only for authorized purposes.
        </div>
        <div className={styles.text}>
          2. Authorities: We may disclose information to comply with legal obligations or to protect rights, property, or safety.
        </div>
        <div className={styles.text}>
          3. Business Transfers: In the event of acquisition, bankruptcy, or other changes in control, personal information may be transferred.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Data Retention</div>
        <div className={styles.text}>
          We retain data as long as necessary for:
        </div>
        <ul>
          <li>Allowing you to use our Sites.</li>
          <li>Preventing unwanted communication.</li>
          <li>Providing refunds.</li>
          <li>Understanding website traffic.</li>
          <li>Preventing abuse, illegal activities, and Terms of Service violations.</li>
          <li>Complying with legal, tax, or accounting requirements.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Security</div>
        <div className={styles.text}>
          We implement administrative, managerial, and technical measures to protect your personal information. Employees follow internal controls for handling personal data. However, users should also take precautions to safeguard their information online.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Your Rights Under GDPR</div>
        <div className={styles.text}>
          If you are within the EU, you have the following rights:
        </div>
        <ul>
          <li>Right to Access: Obtain a copy of your personal data.</li>
          <li>Right to Restrict Processing: Restrict data processing in specific circumstances.</li>
          <li>Right to Rectification: Correct incomplete or inaccurate information.</li>
          <li>Right to Object: Stop processing your data, especially for direct marketing.</li>
          <li>Right to Erasure: Request data deletion if no longer necessary.</li>
        </ul>
        <div className={styles.text}>
          To exercise your rights, contact us at Xplore3desk@gmail.com.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Children’s Data</div>
        <div className={styles.text}>
          Our Sites are not directed to children under 16. We do not knowingly collect information from children. If we inadvertently receive such data, we will delete it.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Links to Other Websites</div>
        <div className={styles.text}>
          Our Sites may link to external websites. We are not responsible for the privacy practices of these third-party sites.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Changes to This Policy</div>
        <div className={styles.text}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with the last updated date. Material changes may be communicated via email or notifications.
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.subTitle}>Contact Us</div>
        <div className={styles.text}>
          For questions or concerns about this Privacy Policy, email us at Xplore3desk@gmail.com.
        </div>
      </div>
    </div>
  );
};

export default Privacy;
