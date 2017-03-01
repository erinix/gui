import {VolumeRepository} from '../repository/volume-repository';
import {ModelEventName} from '../model-event-name';
import {VmwareRepository} from '../repository/vmware-repository';
import {ShareRepository} from '../repository/share-repository';
import {AbstractRoute} from './abstract-route';
import {Model} from '../model';
import * as _ from 'lodash';

export class DatasetRoute extends AbstractRoute {
    private static instance: DatasetRoute;
    private objectType: string;

    private constructor(private volumeRepository: VolumeRepository,
                        private vmwareRepository: VmwareRepository,
                        private shareRepository: ShareRepository) {
        super();
        this.objectType = Model.VolumeDataset;
    }

    public static getInstance() {
        if (!DatasetRoute.instance) {
            DatasetRoute.instance = new DatasetRoute(
                VolumeRepository.getInstance(),
                VmwareRepository.getInstance(),
                ShareRepository.getInstance()
            );
        }
        return DatasetRoute.instance;
    }

    public list(volumeId: string, stack: Array<any>) {
        let columnIndex = 2;
        return this.loadListInColumn(
            stack,
            columnIndex,
            columnIndex - 1,
            '/volume-dataset',
            Model.VolumeDataset,
            this.volumeRepository.listDatasets(),
            {
                filter: {volume: volumeId},
                sort: 'name'
            }
        );
    }

    public create(volumeId: string, stack: Array<any>) {
        let self = this,
            columnIndex = 3,
            parentContext = stack[columnIndex - 1],
            context: any = {
                columnIndex: columnIndex,
                objectType: this.objectType,
                parentContext: parentContext,
                path: parentContext.path + '/create'
            };
        return Promise.all([
            this.volumeRepository.listVolumes(),
            this.volumeRepository.getNewVolumeDataset(),
            this.modelDescriptorService.getUiDescriptorForType(self.objectType)
        ]).spread(function(volumes: Array<any>, dataset: any, uiDescriptor) {
            dataset._volume = _.find(volumes, {id: volumeId});
            context.object = dataset;
            context.userInterfaceDescriptor = uiDescriptor;


            while (stack.length > columnIndex) {
                let context = stack.pop();
                if (context && context.changeListener) {
                    self.eventDispatcherService.removeEventListener(ModelEventName[context.objectType].listChange, context.changeListener);
                }
            }

            stack.push(context);
            return stack;
        });
    }

    public get(volumeId: string, datasetId: string, stack: Array<any>) {
        let self = this,
            columnIndex = 3,
            parentContext = stack[columnIndex - 1],
            context: any = {
                columnIndex: columnIndex,
                objectType: this.objectType,
                parentContext: parentContext,
                path: parentContext.path + '/_/' + encodeURIComponent(datasetId)
            };
        return Promise.all([
            this.volumeRepository.listVolumes(),
            this.volumeRepository.listDatasets(),
            this.shareRepository.listShares(),
            this.modelDescriptorService.getUiDescriptorForType(self.objectType)
        ]).spread(function(volumes: Array<any>, datasets: Array<any>, shares: Array<any>, uiDescriptor) {
            let dataset = _.find(datasets, {id: datasetId});
            dataset._volume = _.find(volumes, {id: volumeId});
            dataset._share = _.find(shares, function(share) {
                return (share.target_path === dataset.name && share.target_type === 'DATASET');
            });
            context.object = dataset;
            context.userInterfaceDescriptor = uiDescriptor;

            while (stack.length > columnIndex) {
                let context = stack.pop();
                if (context && context.changeListener) {
                    self.eventDispatcherService.removeEventListener(ModelEventName[context.objectType].listChange, context.changeListener);
                }
            }

            stack.push(context);
            return stack;
        });
    }

    public listVmware(datasetId: string, stack: Array<any>) {
        let columnIndex = 4;
        return this.loadListInColumn(
            stack,
            columnIndex,
            columnIndex - 1,
            '/vmware-dataset',
            Model.VmwareDataset,
            this.vmwareRepository.listDatasets(),
            {
                filter: {dataset: datasetId},
                sort: 'name'
            }
        );
    }

    public createVmware(datasetId: string, stack: Array<any>) {
        let self = this,
            columnIndex = 5,
            parentContext = stack[columnIndex - 1],
            context: any = {
                columnIndex: columnIndex,
                objectType: this.objectType,
                parentContext: parentContext,
                path: parentContext.path + '/create'
            };
        return Promise.all([
            this.vmwareRepository.getNewVmwareDataset(),
            this.modelDescriptorService.getUiDescriptorForType('VmwareDataset')
        ]).spread(function(vmwareDataset: any, uiDescriptor) {
            vmwareDataset.dataset = datasetId;
            context.object = vmwareDataset;
            context.userInterfaceDescriptor = uiDescriptor;


            while (stack.length > columnIndex) {
                let context = stack.pop();
                if (context && context.changeListener) {
                    self.eventDispatcherService.removeEventListener(ModelEventName[context.objectType].listChange, context.changeListener);
                }
            }

            stack.push(context);
            return stack;
        });
    }

    public getVmware(vmwareDatasetId: string, stack: Array<any>) {
        let self = this,
            columnIndex = 5,
            parentContext = stack[columnIndex - 1],
            context: any = {
                columnIndex: columnIndex,
                objectType: this.objectType,
                parentContext: parentContext,
                path: parentContext.path + '/_/' + encodeURIComponent(vmwareDatasetId)
            };
        return Promise.all([
            this.vmwareRepository.listDatasets(),
            this.modelDescriptorService.getUiDescriptorForType('VmwareDataset')
        ]).spread(function(vmwareDatasets: Array<any>, uiDescriptor) {
            context.object = _.find(vmwareDatasets, {id: vmwareDatasetId});
            context.userInterfaceDescriptor = uiDescriptor;

            while (stack.length > columnIndex) {
                let context = stack.pop();
                if (context && context.changeListener) {
                    self.eventDispatcherService.removeEventListener(ModelEventName[context.objectType].listChange, context.changeListener);
                }
            }

            stack.push(context);
            return stack;
        });
    }

    public getShare(volumeId: string, datasetId: string, stack: Array<any>) {
        let self = this,
            objectType = Model.Share;
        return Promise.all([
            this.volumeRepository.listVolumes(),
            this.shareRepository.listShares(),
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(volumes: Array<any>, shares: Array<any>, uiDescriptor) {
            let columnIndex = 4;
            while (stack.length > columnIndex) {
                let context = stack.pop();
                if (context && context.changeListener) {
                    self.eventDispatcherService.removeEventListener(ModelEventName[context.objectType].listChange, context.changeListener);
                }
            }

            let share = _.find(shares, function(share) {
                return (share.target_path === datasetId && share.target_type === 'DATASET');
            });
            share._volume = _.find(volumes, {id: volumeId});

            stack.push({
                object: share,
                userInterfaceDescriptor: uiDescriptor,
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: stack[columnIndex - 1],
                path: stack[columnIndex - 1].path + '/share'
            });
            return stack;
        });
    }
}
