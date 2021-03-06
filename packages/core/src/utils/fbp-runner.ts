import { IFbpNode, IFbpConnection } from '../types';

interface ActiveNode {
	id: string;
	instance: any;
}

export class DataManager {
	private activeNodes: any = [];
	private worker: any;

	constructor() {}

	setWorker(worker: any): void {
		this.worker = worker;
	}

	setNodes(nodes: IFbpNode[]): void {

	}

	setConnections(connections: IFbpConnection[]): void {

	}

	removeConnection(connection: IFbpConnection): void {

	}

	removeNode(node: IFbpNode): void {

	}

	updateNode(node: IFbpNode): void {

	}


	private setup(nodes: IFbpNode[]): void {

	}
}
