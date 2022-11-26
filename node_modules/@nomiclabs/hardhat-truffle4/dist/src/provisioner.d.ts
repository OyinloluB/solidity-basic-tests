import { NetworkConfig } from "hardhat/types";
import { Linker, TruffleContract } from "./types";
export declare class LazyTruffleContractProvisioner {
    private readonly _networkConfig;
    private readonly _web3;
    private _defaultAccount?;
    private readonly _deploymentAddresses;
    constructor(web3: any, _networkConfig: NetworkConfig, defaultAccount?: string);
    provision(Contract: TruffleContract, linker: Linker): any;
    private _setDefaultValues;
    private _addDefaultParamsHooks;
    private _hookLink;
    private _addDefaultParamsToAllInstanceMethods;
    private _getContractInstanceMethodsToOverride;
    private _addDefaultParamsToInstanceMethod;
    private _ensureTxParamsWithDefaults;
    private _ensureTxParamsIsPresent;
    private _isLastArgumentTxParams;
    private _addDefaultTxParams;
    private _getDefaultAccount;
    private _hookCloneCalls;
    private _hookDeployed;
}
//# sourceMappingURL=provisioner.d.ts.map