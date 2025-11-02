import Layout from '../components/Layout/Layout';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import './DecisionRoom.css';

const proposals = [
  {
    id: 1,
    objective: 'Increase Sales',
    streams: ['Engage', 'Orchestrate'],
    unifiedPlan: 'Boost marketing campaigns while ensuring inventory availability',
    confidence: 84,
    status: 'pending',
    impact: 'Revenue +12%, Conversion +8%',
    risks: 'Low - Stock levels confirmed',
    timeline: '2-3 weeks'
  },
  {
    id: 2,
    objective: 'Cut Waste',
    streams: ['Shield', 'Insight'],
    unifiedPlan: 'Optimize resource allocation based on usage analytics',
    confidence: 72,
    status: 'review',
    impact: 'Cost reduction 15%',
    risks: 'Medium - Requires process changes',
    timeline: '4-6 weeks'
  },
  {
    id: 3,
    objective: 'Improve Customer Retention',
    streams: ['Engage', 'Insight', 'Resilience'],
    unifiedPlan: 'Personalized engagement with predictive support',
    confidence: 91,
    status: 'approved',
    impact: 'Retention +18%, CLV +22%',
    risks: 'Low - Proven approach',
    timeline: '1-2 weeks'
  },
  {
    id: 4,
    objective: 'Supply Chain Optimization',
    streams: ['Orchestrate', 'Shield'],
    unifiedPlan: 'Multi-vendor strategy with risk mitigation',
    confidence: 78,
    status: 'pending',
    impact: 'Delivery time -25%, Cost -10%',
    risks: 'Medium - Vendor dependencies',
    timeline: '6-8 weeks'
  }
];

const DecisionRoom = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle size={20} />;
      case 'pending':
        return <Clock size={20} />;
      case 'review':
        return <AlertCircle size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'approved':
        return 'status-approved';
      case 'pending':
        return 'status-pending';
      case 'review':
        return 'status-review';
      default:
        return 'status-pending';
    }
  };

  const getConfidenceClass = (confidence) => {
    if (confidence >= 80) return 'confidence-high';
    if (confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
  };

  return (
    <Layout currentModule="home">
      <div className="decision-room-page">
        <header className="decision-header">
          <div>
            <h1>Decision Room</h1>
            <p className="decision-subtitle">Cross-stream coordination and unified planning</p>
          </div>
          <div className="decision-stats">
            <div className="stat-card">
              <span className="stat-value">{proposals.filter(p => p.status === 'pending').length}</span>
              <span className="stat-label">Pending</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{proposals.filter(p => p.status === 'approved').length}</span>
              <span className="stat-label">Approved</span>
            </div>
          </div>
        </header>

        <div className="proposals-grid">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="proposal-card">
              <div className="proposal-header">
                <div className="proposal-title-section">
                  <h3 className="proposal-objective">{proposal.objective}</h3>
                  <div className="proposal-streams">
                    {proposal.streams.map((stream, index) => (
                      <span key={index} className="stream-badge">{stream}</span>
                    ))}
                  </div>
                </div>
                <div className={`proposal-status ${getStatusClass(proposal.status)}`}>
                  {getStatusIcon(proposal.status)}
                  <span>{proposal.status}</span>
                </div>
              </div>

              <div className="proposal-plan">
                <div className="plan-label">Unified Plan</div>
                <p className="plan-text">{proposal.unifiedPlan}</p>
              </div>

              <div className="proposal-metrics">
                <div className="metric-item">
                  <span className="metric-label">Confidence</span>
                  <div className={`confidence-bar ${getConfidenceClass(proposal.confidence)}`}>
                    <div className="confidence-fill" style={{ width: `${proposal.confidence}%` }} />
                    <span className="confidence-value">{proposal.confidence}%</span>
                  </div>
                </div>

                <div className="metric-item">
                  <span className="metric-label">Expected Impact</span>
                  <span className="metric-value">{proposal.impact}</span>
                </div>

                <div className="metric-item">
                  <span className="metric-label">Risk Level</span>
                  <span className="metric-value">{proposal.risks}</span>
                </div>

                <div className="metric-item">
                  <span className="metric-label">Timeline</span>
                  <span className="metric-value">{proposal.timeline}</span>
                </div>
              </div>

              <div className="proposal-actions">
                <button className="btn-approve">Approve</button>
                <button className="btn-review">Review</button>
                <button className="btn-decline">Decline</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DecisionRoom;
