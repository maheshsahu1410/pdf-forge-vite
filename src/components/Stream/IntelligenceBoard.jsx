import { Lightbulb, ChevronRight } from 'lucide-react';
import './IntelligenceBoard.css';

const IntelligenceBoard = ({ proposals = [] }) => {
  const getConfidenceClass = (confidence) => {
    if (confidence >= 80) return 'confidence-high';
    if (confidence >= 60) return 'confidence-medium';
    return 'confidence-low';
  };

  return (
    <div className="intelligence-board">
      <div className="board-header">
        <h3>Intelligence Board</h3>
        <span className="proposal-count">{proposals.length} Proposals</span>
      </div>
      
      <div className="proposals-list">
        {proposals.map((proposal, index) => (
          <div key={index} className="intelligence-card">
            <div className="card-icon">
              <Lightbulb size={20} />
            </div>
            
            <div className="card-content">
              <h4 className="card-title">{proposal.title}</h4>
              <p className="card-description">{proposal.description}</p>
              
              <div className="card-footer">
                <div className={`confidence-badge ${getConfidenceClass(proposal.confidence)}`}>
                  <span className="confidence-label">Confidence</span>
                  <span className="confidence-value">{proposal.confidence}%</span>
                </div>
                
                {proposal.tags && (
                  <div className="proposal-tags">
                    {proposal.tags.map((tag, i) => (
                      <span key={i} className="proposal-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="card-actions">
                <button className="btn-simulate">Simulate</button>
                <button className="btn-approve">Approve</button>
                <button className="btn-details">
                  Details <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceBoard;
