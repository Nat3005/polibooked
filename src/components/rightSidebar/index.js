import React from 'react';
import EventCard from '../eventCard';
import { MediumText } from '../text/TextElements';
import { RightSidebarContainer } from './RightSidebarElements';

function RightSidebar() {
  const testTags = ['sample', 'tags', 'testing'];
  return (
    <RightSidebarContainer>
      <MediumText variant="dark" weight="bold">
        Nadchodzące wydarzenia
      </MediumText>
      <EventCard
        variant="tutoring"
        title="Best believe I am still bejeweled when I walk into the room"
        description="But I can see us lost in the memory. August slipped away into a moment in time. 'Cause it was never mine"
        time="10:30"
        tags={testTags}
      />
      <EventCard
        variant="lesson"
        title="Best believe I am still bejeweled when I walk into the room"
        description="But I can see us lost in the memory. August slipped away into a moment in time. 'Cause it was never mine"
        time="10:30"
        tags={testTags}
      />
      <EventCard
        variant="tutoring"
        title="Best believe I am still bejeweled when I walk into the room"
        description="But I can see us lost in the memory. August slipped away into a moment in time. 'Cause it was never mine"
        time="10:30"
        tags={testTags}
      />
      <EventCard
        variant="tutoring"
        title="Best believe I am still bejeweled when I walk into the room"
        description="But I can see us lost in the memory. August slipped away into a moment in time. 'Cause it was never mine"
        time="10:30"
        tags={testTags}
      />
    </RightSidebarContainer>
  );
}

export default RightSidebar;
