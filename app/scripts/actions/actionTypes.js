// ACTION TYPES
// ============
// Constant string identifiers used by action creators and reducers in Redux.

"use strict";

// WEBSOCKET
export const WS_TARGET_CHANGED = "WS_TARGET_CHANGED";
export const WS_CONNECTING = "WS_CONNECTING";
export const WS_OPEN = "WS_OPEN";
export const WS_CLOSING = "WS_CLOSING";
export const WS_CLOSED = "WS_CLOSED";
export const WS_ATTEMPT_CONNECTION = "WS_ATTEMPT_CONNECTION";
export const WS_RECONNECT_TICK = "WS_RECONNECT_TICK";



// RPC
export const RPC_ENQUEUE = "RPC_ENQUEUE";
export const RPC_DEQUEUE = "RPC_DEQUEUE";
export const RPC_REQUEST = "RPC_REQUEST";
export const RPC_SUCCESS = "RPC_SUCCESS";
export const RPC_FAILURE = "RPC_FAILURE";
export const RPC_TIMEOUT = "RPC_TIMEOUT";
export const RPC_RESOLVE = "RPC_RESOLVE";



// EVENTS
export const SYSTEM_EVENT = "SYSTEM_EVENT"



// SUBSCRIPTION
export const SUBSCRIBE = "SUBSCRIBE";
export const UNSUBSCRIBE = "UNSUBSCRIBE";

export const ENTITY_CHANGED = "ENTITY_CHANGED";

export const STATD_PULSE_SUBCSRIBE = "STATD_PULSE_SUBCSRIBE";
export const STATD_PULSE_UNSUBCSRIBE = "STATD_PULSE_UNSUBCSRIBE";



// TASKS
export const TASK_SUBMIT_REQUEST = "TASK_SUBMIT_REQUEST";
export const TASK_SUBMIT_SUCCESS = "TASK_SUBMIT_SUCCESS";
export const TASK_SUBMIT_FAILURE = "TASK_SUBMIT_FAILURE";
export const TASK_SUBMIT_TIMEOUT = "TASK_SUBMIT_TIMEOUT";
export const TASK_SUBMIT_RESOLVE = "TASK_SUBMIT_RESOLVE";

export const TASK_CREATED = "TASK_CREATED";
export const TASK_UPDATED = "TASK_UPDATED";
export const TASK_PROGRESS = "TASK_PROGRESS";
export const TASK_FINISHED = "TASK_FINISHED";
export const TASK_FAILED = "TASK_FAILED";



// AUTHENTICATION
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const LOGIN_SUBMIT_REQUEST = "LOGIN_SUBMIT_REQUEST";
export const LOGOUT = "LOGOUT";
export const LOGOUT_FORCE = "LOGOUT_FORCE";



// ACTIONS

// update
// SETTINGS
export const UPDATE_UPDATE_SETTINGS = "UPDATE_UPDATE_SETTINGS";
export const RESET_UPDATE_SETTINGS = "RESET_UPDATE_SETTINGS";

// QUERIES
export const UPDATE_TRAINS_REQUEST = "UPDATE_TRAINS_REQUEST";
export const CURRENT_TRAIN_REQUEST = "CURRENT_TRAIN_REQUEST";
export const UPDATE_CONFIG_REQUEST = "UPDATE_CONFIG_REQUEST";
export const IS_UPDATE_AVAILABLE_REQUEST = "IS_UPDATE_AVAILABLE_REQUEST";
export const UPDATE_INFO_REQUEST = "UPDATE_INFO_REQUEST";

// TASKS
export const CHECK_TASK_REQUEST = "CHECK_TASK_REQUEST";
export const CHECK_FETCH_TASK_REQUEST = "CHECK_FETCH_TASK_REQUEST";
export const UPDATE_CONFIG_TASK_REQUEST = "UPDATE_CONFIG_TASK_REQUEST";
export const DOWNLOAD_UPDATE_TASK_REQUEST = "DOWNLOAD_UPDATE_TASK_REQUEST";
export const MANUAL_UPDATE_TASK_REQUEST = "MANUAL_UPDATE_TASK_REQUEST";
export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const VERIFY_TASK_REQUEST = "VERIFY_TASK_REQUEST";


// disks
export const DISK_OVERVIEW_REQUEST = "DISK_OVERVIEW_REQUEST";

// network
export const NETWORK_CONFIG_REQUEST = "NETWORK_CONFIG_REQUEST";
export const NETWORK_CONFIGURE_TASK_SUBMIT = "NETWORK_CONFIGURE_TASK_SUBMIT";
export const UPDATE_NETWORK_CONFIG = "UPDATE_NETWORK_CONFIG";
export const REVERT_NETWORK_CONFIG = "REVERT_NETWORK_CONFIG";

export const INTERFACES_REQUEST = "INTERFACES_REQUEST";
export const INTERFACE_CONFIGURE_TASK_SUBMIT = "INTERFACE_CONFIGURE_TASK_SUBMIT";
export const UPDATE_INTERFACE = "UPDATE_INTERFACE";
export const REVERT_INTERFACE = "REVERT_INTERFACE";

// volumes
export const VOLUMES_RPC_REQUEST = "VOLUMES_RPC_REQUEST";
export const AVAILABLE_DISKS_RPC_REQUEST = "AVAILABLE_DISKS_RPC_REQUEST";

export const CREATE_VOLUME_TASK_SUBMIT_REQUEST = "CREATE_VOLUME_TASK_SUBMIT_REQUEST";
export const UPDATE_VOLUME_TASK_SUBMIT_REQUEST = "UPDATE_VOLUME_TASK_SUBMIT_REQUEST";
export const DESTROY_VOLUME_TASK_SUBMIT_REQUEST = "DESTROY_VOLUME_TASK_SUBMIT_REQUEST";

export const CREATE_DATASET_TASK_SUBMIT_REQUEST = "CREATE_DATASET_TASK_SUBMIT_REQUEST";
export const UPDATE_DATASET_TASK_SUBMIT_REQUEST = "UPDATE_DATASET_TASK_SUBMIT_REQUEST";
export const DESTROY_DATASET_TASK_SUBMIT_REQUEST = "DESTROY_DATASET_TASK_SUBMIT_REQUEST";

export const INTEND_DESTROY_VOLUME = "INTEND_DESTROY_VOLUME";
export const CANCEL_DESTROY_VOLUME = "CANCEL_DESTROY_VOLUME";

export const UPDATE_VOLUME = "UPDATE_VOLUME";
export const REVERT_VOLUME = "REVERT_VOLUME";

export const UPDATE_VOLUME_TOPOLOGY = "UPDATE_VOLUME_TOPOLOGY";
export const REVERT_VOLUME_TOPOLOGY = "REVERT_VOLUME_TOPOLOGY";

export const FOCUS_VOLUME = "FOCUS_VOLUME";
export const BLUR_VOLUME = "BLUR_VOLUME";

export const SELECT_PRESET_TOPOLOGY = "SELECT_PRESET_TOPOLOGY";

export const SELECT_DISK = "SELECT_DISK";
export const DESELECT_DISK = "DESELECT_DISK";

// shares
export const SHARES_RPC_REQUEST = "SHARES_RPC_REQUEST";

export const CREATE_SHARE_TASK_SUBMIT_REQUEST = "CREATE_SHARE_TASK_SUBMIT_REQUEST";
export const UPDATE_SHARE_TASK_SUBMIT_REQUEST = "UPDATE_SHARE_TASK_SUBMIT_REQUEST";
export const DELETE_SHARE_TASK_SUBMIT_REQUEST = "DELETE_SHARE_TASK_SUBMIT_REQUEST";

export const UPDATE_SHARE = "UPDATE_SHARE";
export const REVERT_SHARE = "REVERT_SHARE";

export const FOCUS_SHARE = "FOCUS_SHARE";
export const BLUR_SHARE = "BLUR_SHARE";


// shells
export const GET_SHELLS_REQUEST = "GET_SHELLS_REQUEST";
export const SPAWN_SHELL_REQUEST = "SPAWN_SHELL_REQUEST";

// statd
export const STATD_HISTORY_REQUEST = "STATD_HISTORY_REQUEST";
export const STATD_PULSE = "STATD_PULSE";

// ACCOUNTS

// users
export const QUERY_USERS_REQUEST = "QUERY_USERS_REQUEST";
export const GET_NEXT_UID_REQUEST = "GET_NEXT_UID_REQUEST";
export const UPDATE_USER_FORM = "UPDATE_USER_FORM";
export const RESET_USER_FORM = "RESET_USER_FORM";
export const USER_CREATE_TASK = "USER_CREATE_TASK";
export const USER_UPDATE_TASK = "USER_UPDATE_TASK";
export const USER_DELETE_TASK = "USER_DELETE_TASK";

// groups
export const QUERY_GROUPS_REQUEST = "QUERY_GROUPS_REQUEST";
export const GET_NEXT_GID_REQUEST = "GET_NEXT_GID_REQUEST";
export const UPDATE_GROUP_FORM = "UPDATE_GROUP_FORM";
export const RESET_GROUP_FORM = "RESET_GROUP_FORM";
export const GROUP_CREATE_TASK = "GROUP_CREATE_TASK";
export const GROUP_UPDATE_TASK = "GROUP_UPDATE_TASK";
export const GROUP_DELETE_TASK = "GROUP_DELETE_TASK";

// SERVICES

// IPFS
export const UPDATE_IPFS_FORM = "UPDATE_IPFS_FORM";
export const RESET_IPFS_FORM = "RESET_IPFS_FORM";
export const IPFS_CONFIG_REQUEST = "IPFS_CONFIG_REQUEST";
export const CONFIGURE_IPFS_TASK_REQUEST = "CONFIGURE_IPFS_TASK_REQUEST";
export const TOGGLE_IPFS_TASK_REQUEST = "TOGGLE_IPFS_TASK_REQUEST";

// NFS
export const UPDATE_NFS_FORM = "UPDATE_NFS_FORM";
export const RESET_NFS_FORM = "RESET_NFS_FORM";
export const NFS_CONFIG_REQUEST = "NFS_CONFIG_REQUEST";
export const CONFIGURE_NFS_TASK_REQUEST = "CONFIGURE_NFS_TASK_REQUEST";
export const TOGGLE_NFS_TASK_REQUEST = "TOGGLE_NFS_TASK_REQUEST";
export const TOGGLE_NFS_V4_TASK_REQUEST = "TOGGLE_NFS_V4_TASK_REQUEST";

// Riak
export const UPDATE_RIAK_FORM = "UPDATE_RIAK_FORM";
export const RESET_RIAK_FORM = "RESET_RIAK_FORM";
export const RIAK_CONFIG_REQUEST = "RIAK_CONFIG_REQUEST";
export const CONFIGURE_RIAK_TASK_REQUEST = "CONFIGURE_RIAK_TASK_REQUEST";
export const TOGGLE_RIAK_TASK_REQUEST = "TOGGLE_RIAK_TASK_REQUEST";

// Riak CS
export const UPDATE_RIAKCS_FORM = "UPDATE_RIAKCS_FORM";
export const RESET_RIAKCS_FORM = "RESET_RIAKCS_FORM";
export const RIAKCS_CONFIG_REQUEST = "RIAKCS_CONFIG_REQUEST";
export const CONFIGURE_RIAKCS_TASK_REQUEST = "CONFIGURE_RIAKCS_TASK_REQUEST";
export const TOGGLE_RIAKCS_TASK_REQUEST = "TOGGLE_RIAKCS_TASK_REQUEST";

// SMB
export const UPDATE_SMB_FORM = "UPDATE_SMB_FORM";
export const RESET_SMB_FORM = "RESET_SMB_FORM";
export const SMB_CONFIG_REQUEST = "SMB_CONFIG_REQUEST";
export const CONFIGURE_SMB_TASK_REQUEST = "CONFIGURE_SMB_TASK_REQUEST";
export const TOGGLE_SMB_TASK_REQUEST = "TOGGLE_SMB_TASK_REQUEST";

// SSH
export const UPDATE_SSH_FORM = "UPDATE_SSH_FORM";
export const RESET_SSH_FORM = "RESET_SSH_FORM";
export const SSH_CONFIG_REQUEST = "SSH_CONFIG_REQUEST";
export const CONFIGURE_SSH_TASK_REQUEST = "CONFIGURE_SSH_TASK_REQUEST";
export const TOGGLE_SSH_TASK_REQUEST = "TOGGLE_SSH_TASK_REQUEST";


// SYSTEM

// FORMS
// OS FORM
export const UPDATE_OS_FORM = "UPDATE_OS_FORM";
export const RESET_OS_FORM = "RESET_OS_FORM";
export const SUBMIT_OS_TASK_REQUEST = "SUBMIT_OS_TASK_REQUEST";

// CONNECTION FORM
// export const UPDATE_CONNECTION_FORM = "UPDATE_CONNECTION_FORM";
// export const RESET_CONNECTION_FORM = "RESET_CONNECTION_FORM";
// export const SUBMIT_CONNECTION_TASK_REQUEST = "SUBMIT_CONNECTION_TASK_REQUEST";

// LOCALIZATION FORM
export const UPDATE_LOCALIZATION_FORM = "UPDATE_LOCALIZATION_FORM";
export const RESET_LOCALIZATION_FORM = "RESET_LOCALIZATION_FORM";
export const SUBMIT_LOCALIZATION_TASK_REQUEST = "SUBMIT_LOCALIZATION_TASK_REQUEST";

// CONSOLE FORM
export const UPDATE_CONSOLE_FORM = "UPDATE_CONSOLE_FORM";
export const RESET_CONSOLE_FORM = "RESET_CONSOLE_FORM";
export const SUBMIT_CONSOLE_TASK_REQUEST = "SUBMIT_CONSOLE_TASK_REQUEST";

// QUERIES
// GENERAL
export const SYSTEM_GENERAL_CONFIG_REQUEST = "SYSTEM_GENERAL_CONFIG_REQUEST";
export const SYSTEM_GENERAL_TIMEZONES_REQUEST = "SYSTEM_GENERAL_TIMEZONES_REQUEST";
export const KEYMAPS_REQUEST = "KEYMAPS_REQUEST";

// ADVANCED
export const SYSTEM_ADVANCED_CONFIG_REQUEST = "SYSTEM_ADVANCED_CONFIG_REQUEST";
export const SERIAL_PORTS_REQUEST = "SERIAL_PORTS_REQUEST";

// INFO
export const SYSTEM_INFO_HARDWARE_REQUEST = "SYSTEM_INFO_HARDWARE_REQUEST";
export const SYSTEM_INFO_LOAD_AVG_REQUEST = "SYSTEM_INFO_LOAD_AVG_REQUEST";
export const SYSTEM_INFO_TIME_REQUEST = "SYSTEM_INFO_TIME_REQUEST";
export const SYSTEM_INFO_UNAME_FULL_REQUEST = "SYSTEM_INFO_UNAME_FULL_REQUEST";
export const SYSTEM_INFO_VERSION_REQUEST = "SYSTEM_INFO_VERSION_REQUEST";

//TASKS
export const SUBMIT_REBOOT_TASK_REQUEST = "SUBMIT_REBOOT_TASK_REQUEST";
export const SUBMIT_SHUTDOWN_TASK_REQUEST = "SUBMIT_SHUTDOWN_TASK_REQUEST";
