import React from "react";
import "./MembershipContent.css";
import { FaRegCircle } from "react-icons/fa";
const MembershipContent = () => {
  const benefits = [
    "5% Discount on EC-Council and CompTIA course fee.",
    "10% Discount on Governance Course Fees.",
    "CPE credits and participation certificate after each workshop.",
    "Premium Seat in Sunday Sessions - Upskill Programs (Twice a Month).",
    "Discounted vouchers for CompTIA courses",
    "Free one-to-one counseling session on new/existing programs.",
    "Early access to the latest updates on industry trends, internships, and jobs.",
    "Extended Post-Training Support for 3 Months (Instead of 1 Month).",
    "Recommendation/Appreciation letter for employer’s reference (Only after verification).",
    "Free Access to the recordings of Webinars/Workshops Sessions.",
  ];
  return (
    <div className="membership-content">
      <div className="content-top">
        <h2 className="section-heading">Certbills Membership Details</h2>
        <table className="table1">
          <tr>
            <th>Details</th>
            <th>New User</th>
            <th>Registered User</th>
          </tr>
          <tr>
            <td>Membership fee</td>
            <td>
              <span className="price">PKR 5000/</span>
            </td>
            <td>
              <span className="free">FREE</span>
            </td>
          </tr>
          <tr>
            <td>Validity</td>
            <td>1 year</td>
            <td>1 year</td>
          </tr>
        </table>
      </div>
      <div className="content-bottom">
        <h3>Benefits</h3>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>
              <FaRegCircle />
              {benefit}
            </li>
          ))}
        </ul>
        <h3>Refer and Earn Program</h3>
        <p>
          You can avail of <strong>extra benefits</strong> by referring your
          friends/colleagues to the{" "}
          <strong>InfoSecTrain Membership Plan</strong>.
        </p>
        <table className="table2">
          <tr>
            <th>Referrals</th>
            <th>Courses</th>
          </tr>
          <tr>
            <td>Up to 5 Referrals</td>
            <td>
              Earn <span className="price">PKR 1,000/</span> per referral
            </td>
          </tr>
          <tr>
            <td>6 to 15 Referrals</td>
            <td>
              Earn <span className="price">PKR 1,000/</span> per referral +{" "}
              <span className="price">20% discount</span> on your next training.
            </td>
          </tr>
          <tr>
            <td>More than 15 Referrals</td>
            <td>
              Get one complimentary training (worth up to
              <span className="price"> PKR 25,000</span> *)
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MembershipContent;
