import React from "react";
import ArchitecturesTable from "../Components/Architecture/ArchitecturesTable";
import ArchitectureHeader from "../Components/Architecture/ArchitectureHeader";
import { ArchitectureStatus } from "../Constants/constants";
import moment from 'moment';

export default function ArchitecturesPage() {
    const architectures = [
        { id: "1", name: "Architecture1", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "2", name: "Architecture2", status: ArchitectureStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "3", name: "Architecture3", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "4", name: "Architecture4", status: ArchitectureStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "5", name: "Architecture1", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "6", name: "Architecture2", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "7", name: "Architecture3", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "8", name: "Architecture4", status: ArchitectureStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "9", name: "Architecture1", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "10", name: "Architecture2", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
        { id: "11", name: "Architecture3", status: ArchitectureStatus.draft, created_at: moment().format(), updated_at: moment().format() },
        { id: "12", name: "Architecture4", status: ArchitectureStatus.active, created_at: moment().format(), updated_at: moment().format() },
    ]
    return (
        <>
            <ArchitectureHeader />
            <ArchitecturesTable architectures={architectures} />
        </>
    );
}
