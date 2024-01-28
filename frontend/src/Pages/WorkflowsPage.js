import React from "react";
import WorkflowTable from "../Components/Workflow/WorkflowTable";
import WorkflowHeader from "../Components/Workflow/WorkflowHeader";
import { workflowStatus } from "../Constants/constants";
import moment from 'moment';

export default function WorkflowsPage() {
    const workflows = [
        { id: "1", name: "workflow1", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "2", name: "workflow2", status: workflowStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "3", name: "workflow3", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "4", name: "workflow4", status: workflowStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "5", name: "workflow1", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "6", name: "workflow2", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "7", name: "workflow3", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "8", name: "workflow4", status: workflowStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "9", name: "workflow1", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "10", name: "workflow2", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "11", name: "workflow3", status: workflowStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "12", name: "workflow4", status: workflowStatus.active, created_at: moment().format(), updated_at: moment().format() },
    ]
    return (
        <>
            <WorkflowHeader />
            <WorkflowTable workflows={workflows} />
        </>
    );
}
