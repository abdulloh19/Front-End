export interface AccountRecovery {
    onNavigateStateComponent: (component: "login" | "register" | "verification" | "account-recovery") => void;
  }
  