import React from "react";
import { Draggable } from "react-beautiful-dnd";
import IssueTicket from "./StatusTicket";

const ColumnHeader = ({ title, taskCount }) => {
  return (
    <div className="d-flex">
      <h5>
        {title}({taskCount})
      </h5>
    </div>
  );
};

const TicketList = ({ tasks }) => {
  return tasks.map((task, index) => (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <IssueTicket task={task} />
        </div>
      )}
    </Draggable>
  ));
};

export { ColumnHeader, TicketList };
