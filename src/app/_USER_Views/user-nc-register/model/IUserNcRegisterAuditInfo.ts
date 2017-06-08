export interface IUserNcRegisterAuditInfo {
  ncId: number;
  auditId: number;
  projectName: string;
  raisedBy: string;
  expectedCloseDate: Date;
  assignedTo: string;
  ncDescription: string;
  ncStatus: number;
}
