import Layout from '../components/Layout/Layout';
import StreamWorkspace from '../components/Stream/StreamWorkspace';

const signals = [
  { time: '2m ago', type: 'increase', text: 'ROAS ↑ 4%' },
  { time: '5m ago', type: 'decrease', text: 'CTR ↓ 2%' },
  { time: '12m ago', type: 'increase', text: 'Campaign X engagement +15%' },
  { time: '18m ago', type: 'neutral', text: 'New audience segment identified' },
  { time: '25m ago', type: 'increase', text: 'Email open rate ↑ 8%' },
];

const proposals = [
  {
    title: 'Increase Campaign X Budget by 10%',
    description: 'Strong performance indicators suggest scaling opportunity',
    confidence: 87,
    tags: ['Brand Guideline', 'Budget Cap', 'Risk: Low']
  },
  {
    title: 'Adjust AdX Bidding Strategy',
    description: 'Optimize for conversion instead of clicks based on recent data',
    confidence: 72,
    tags: ['Performance', 'Risk: Medium']
  },
  {
    title: 'Launch Retargeting Campaign',
    description: 'High-value cart abandoners showing strong intent signals',
    confidence: 91,
    tags: ['Brand Guideline', 'Risk: Low']
  }
];

const actions = [
  {
    title: 'Campaign Budget Adjustment',
    description: 'Increased AdX budget by +10%',
    time: '1h ago',
    status: 'completed',
    result: 'ROAS improved by 7.4%',
    feedback: [
      { stream: 'Orchestrate', text: 'Inventory levels confirmed sufficient' },
      { stream: 'Insight', text: 'ROI projection validated' }
    ]
  },
  {
    title: 'Email Sequence Optimization',
    description: 'A/B test new subject lines',
    time: '3h ago',
    status: 'pending'
  },
  {
    title: 'Audience Segmentation',
    description: 'Created new high-value segment',
    time: '5h ago',
    status: 'completed',
    result: 'Segment size: 12.5K users',
    feedback: [
      { stream: 'Insight', text: 'CLV projection: +22%' }
    ]
  }
];

const Engage = () => {
  return (
    <Layout currentModule="engage">
      <div className="page-container">
        <header className="page-header">
          <h1>Lumi-Engage</h1>
          <p className="page-subtitle">Marketing and customer engagement intelligence stream</p>
        </header>
        
        <StreamWorkspace 
          streamName="Engage"
          signals={signals}
          proposals={proposals}
          actions={actions}
        />
      </div>
    </Layout>
  );
};

export default Engage;
