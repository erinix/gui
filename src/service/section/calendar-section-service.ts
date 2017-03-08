import {CalendarRepository} from '../../repository/calendar-repository';
import {TaskRepository} from '../../repository/task-repository';
import {SystemRepository} from '../../repository/system-repository';
import {AbstractSectionService} from './abstract-section-service-ng';
import {DiskRepository} from '../../repository/disk-repository';
import {VolumeRepository} from '../../repository/volume-repository';
import {AccountRepository} from '../../repository/account-repository';
import {ReplicationRepository} from '../../repository/replication-repository';
import {MiddlewareClient} from '../middleware-client';
import * as _ from 'lodash';

export class CalendarSectionService extends AbstractSectionService {
    private calendarRepository: CalendarRepository;
    private taskRepository: TaskRepository;
    private diskRepository: DiskRepository;
    private systemRepository: SystemRepository;
    private volumeRepository: VolumeRepository;
    private accountRepository: AccountRepository;
    private replicationRepository: ReplicationRepository;
    private middlewareClient: MiddlewareClient;

    public readonly SCHEDULE_OPTIONS = CalendarRepository.SCHEDULE_OPTIONS;
    public readonly DAYS = CalendarRepository.DAYS;
    public readonly HOURS = CalendarRepository.HOURS;
    public readonly MINUTES = CalendarRepository.MINUTES;
    public readonly MONTHS = CalendarRepository.MONTHS;
    public readonly DAYS_OF_WEEK = CalendarRepository.DAYS_OF_WEEK;
    public readonly CALENDAR_TASK_CATEGORIES = CalendarRepository.CALENDAR_TASK_CATEGORIES;

    protected init() {
        this.calendarRepository = CalendarRepository.getInstance();
        this.taskRepository = TaskRepository.getInstance();
        this.diskRepository = DiskRepository.getInstance();
        this.systemRepository = SystemRepository.getInstance();
        this.volumeRepository = VolumeRepository.getInstance();
        this.accountRepository = AccountRepository.getInstance();
        this.replicationRepository = ReplicationRepository.getInstance();
        this.middlewareClient = MiddlewareClient.getInstance();
    }

    protected loadEntries(): Promise<Array<any>> {
        return this.calendarRepository.getNewCalendarInstance().then(function(calendar) {
            return [calendar];
        });
    }

    protected loadExtraEntries(): Promise<Array<any>> {
        return undefined;
    }

    protected loadSettings(): Promise<any> {
        return undefined;
    }

    protected loadOverview(): Promise<any> {
        return undefined;
    }

    public getGmtOffset() {
        return this.systemRepository.getGmtOffset();
    }

    public getCalendarInstance() {
        return this.calendarRepository.getNewCalendarInstance();
    }

    public getTasksScheduleOnDay(day: any) {
        return this.calendarRepository.getTasksScheduleOnDay(day);
    }

    public initializeCalendarTask(task: any, view: any) {
        return this.calendarRepository.initializeTask(task, view);
    }

    public getScheduleStringForTask(task: any) {
        return this.calendarRepository.getScheduleStringForTask(task);
    }

    public runTask(task: any) {
        this.taskRepository.submitTask(task.task, task.args);
    }

    public updateScheduleOnTask(task: any) {
        this.calendarRepository.updateScheduleOnTask(task);
    }

    public listDisks() {
        return this.diskRepository.listDisks();
    }

    public listVolumes() {
        return this.volumeRepository.listVolumes();
    }

    public listUsers() {
        return this.accountRepository.listUsers();
    }

    public deleteReplication(replication) {
        return this.replicationRepository.deleteReplication(replication);
    }
}
