import './ProjectsPage.css'
import intendImage1 from '../assets/projects-intend-001.jpg'
import humanAiImage from '../assets/projects-human-ai-001.jpg'
import pscImage from '../assets/projects-psc-001.jpg'

const projects = [
  {
    id: 'intend',
    title: 'Intend - inSwitch Tool',
    shortTitle: 'Intend',
    category: 'EU',
    subtitle: 'INTEND: Intent-Based Data Operation in the Computing Continuum',
    overview: 'The overall objective of INTEND is to deliver <strong>breakthrough AI solutions</strong> to achieve novel <strong>intent-based data operation</strong>, capable of (1) continually learning how to adapt <strong>heterogeneous cloud/edge resources</strong>, (2) <strong>strategic decision making</strong> across the decentralized continuum, and (3) <strong>human-friendly interaction</strong> with data stakeholders based on shared intents.',
    fullDescription: 'The <strong>Biomedical Knowledge Engineering Laboratory (BiKE Lab)</strong> from <strong>Seoul National University (SNU)</strong> is headed by <strong>Professor Hong-Gee Kim</strong> and is responsible for <strong>inSwitch</strong>, one of the 11 software tools that will be delivered by the INTEND project. BiKE Lab will be collaborating together with <strong>Professor Taehyeong Kim</strong> and his laboratory, the <strong>Lab of Artificial Intelligence and Big Data for Agriculture (LABA)</strong> for the development of the tool. inSwitch is part of <strong>Work Package 4 (WP4)</strong>, which is responsible for <strong>chat-based stakeholder interfaces</strong> for intent-based data operations. WP4 consists of 3 other software tools, <strong>inGraph, inChat and inExplain (inGen)</strong> and the 4 tools work together to form the stakeholder interfaces. In the WP4 group of tools, inSwitch\'s main role is to assist in translating <strong>natural language intents</strong> into <strong>structured languages</strong> that other INTEND tools and use cases can utilize.',
    goals: [],
    startDate: 'Jan. 1, 2024',
    endDate: 'Dec. 31, 2027',
    color: '#000000',
    images: [intendImage1]
  },
  {
    id: 'human-ai',
    title: 'Intend - Human-AI collaborated decision-making',
    shortTitle: 'Human-AI Decision-Making',
    category: 'NRF',
    subtitle: 'Development of interactive artificial intelligence decision systems that understands the context of specific domains based on Neuro-Symbolic AI',
    overview: 'This project is part of the <strong>Horizon Europe Framework Programme</strong> and focuses on enhancing <strong>data processing efficiency</strong> in the <strong>cognitive computing continuum</strong> through <strong>AI-driven solutions</strong> for <strong>resource adaptation, strategic decision-making, and intent-based data operations</strong>. SNU plays a key role in developing <strong>neuro-symbolic AI technologies, knowledge databases, and interactive AI decision-making systems</strong>.',
    fullDescription: 'The objective is to develop a <strong>neuro-symbolic AI-based conversational artificial intelligence decision-making system</strong> equipped with the ability to understand and operate <strong>domain-specific knowledge</strong>.',
    goals: [
      '<strong>Build diverse domain-specific knowledge databases</strong> for various fields.',
      '<strong>Develop composite reasoning technology</strong> based on <strong>neuro-symbolic AI</strong>.',
      '<strong>Achieve conversational AI knowledge learning capabilities</strong>.',
      '<strong>Design a method to link ontologies</strong> with <strong>domain-specific knowledge graphs</strong>.',
      '<strong>Implement a code-switching mechanism</strong> to automatically switch between <strong>domain-specific knowledge databases</strong> based on the context of decision-making.'
    ],
    startDate: 'Oct. 1, 2023',
    endDate: 'Nov. 30, 2026',
    color: '#90BDDF'
  ,
    images: [humanAiImage]
  },
  {
    id: 'psc',
    title: 'PSC - Single-cell multi-omics based AI platform',
    shortTitle: 'PSC',
    category: 'NRF',
    subtitle: 'Single-cell multi-omics based AI platform for discovering biomarkers and therapeutic targets',
    overview: 'The objective is to develop an <strong>AI platform</strong> for identifying <strong>diagnostic markers and therapeutic targets</strong> for <strong>Primary Sclerosing Cholangitis (PSC)</strong> based on <strong>single-cell multi-omics</strong>.',
    goals: [
      'Generate and post-process <strong>single-cell multi-omics data</strong> for <strong>Primary Sclerosing Cholangitis (PSC)</strong>.',
      'Develop a <strong>multi-AI platform</strong> to identify <strong>diagnostic markers and therapeutic targets</strong> for PSC.',
      'Create a <strong>service</strong> to explore PSC <strong>diagnostic markers and therapeutic targets</strong> using the AI platform.'
    ],
    startDate: 'Jul. 1, 2023',
    endDate: 'Jun. 30, 2026',
    color: '#82726b',
    images: [pscImage]
  }
]

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-detail">
            <div className="project-header-section">
              <div className="project-header-content">
                <span className="project-category" style={{ backgroundColor: project.color }}>
                  {project.category}
                </span>
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
              </div>
            </div>

            <div className="project-body">
              <div className="project-text-section">
                <p className="project-overview" dangerouslySetInnerHTML={{ __html: project.overview }} />
                
                {project.fullDescription && (
                  <p className="project-description" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                )}

                <div className="project-dates">
                  <p>
                    <strong>Project Start Date:</strong> {project.startDate}
                  </p>
                  <p>
                    <strong>Project End Date:</strong> {project.endDate}
                  </p>
                </div>

                {project.goals.length > 0 && (
                  <div className="project-goals">
                    <h4>Goals:</h4>
                    <ol>
                      {project.goals.map((goal, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: goal }} />
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {project.images.length > 0 && (
                <div className="project-images">
                  {project.images.map((image, index) => (
                    <figure key={index} className="project-image-figure">
                      <img src={image} alt={`${project.title} image ${index + 1}`} />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
