import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import TeamMember from '../../components/TeamMember/TeamMember';
import Reqs from '../../components/Reqs/Reqs';
import Risk from '../../components/Risk/Risk';

export default function EditPage() {
return(
<>
    <div className="project_title">
        <h1>Project Title</h1>
        <hr>
        </hr>
    </div>
    <div>
    <Accordion flush alwaysOpen>
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>Project Details</Accordion.Header>
        <Accordion.Body>
          <ProjectInfo />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Team Members</Accordion.Header>
        <Accordion.Body>
          <TeamMember />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Requirements</Accordion.Header>
        <Accordion.Body>
          <Reqs />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Risks</Accordion.Header>
        <Accordion.Body>
          <Risk />
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
</>
)
}