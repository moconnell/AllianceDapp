/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type ProfileStruct = {
  description: string;
  email: string;
  picture: string;
  url: string;
  username: string;
};

export type ProfileStructOutput = [string, string, string, string, string] & {
  description: string;
  email: string;
  picture: string;
  url: string;
  username: string;
};

export type AvailabilityStruct = {
  location: string;
  timeZone: string;
  availableDays: BigNumberish;
  earliestStartMinutes: BigNumberish;
  minutesAvailable: BigNumberish;
};

export type AvailabilityStructOutput = [
  string,
  string,
  number,
  number,
  number
] & {
  location: string;
  timeZone: string;
  availableDays: number;
  earliestStartMinutes: number;
  minutesAvailable: number;
};

export interface CalendarFactoryInterface extends utils.Interface {
  functions: {
    "createCalendar((string,string,string,string,string),(string,string,uint8,uint16,uint16))": FunctionFragment;
    "remove()": FunctionFragment;
    "userToCalendar(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createCalendar" | "remove" | "userToCalendar"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createCalendar",
    values: [ProfileStruct, AvailabilityStruct]
  ): string;
  encodeFunctionData(functionFragment: "remove", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userToCalendar",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createCalendar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userToCalendar",
    data: BytesLike
  ): Result;

  events: {
    "CalendarCreated(address,address)": EventFragment;
    "CalendarRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CalendarCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CalendarRemoved"): EventFragment;
}

export interface CalendarCreatedEventObject {
  calendar: string;
  owner: string;
}
export type CalendarCreatedEvent = TypedEvent<
  [string, string],
  CalendarCreatedEventObject
>;

export type CalendarCreatedEventFilter = TypedEventFilter<CalendarCreatedEvent>;

export interface CalendarRemovedEventObject {
  calendar: string;
  owner: string;
}
export type CalendarRemovedEvent = TypedEvent<
  [string, string],
  CalendarRemovedEventObject
>;

export type CalendarRemovedEventFilter = TypedEventFilter<CalendarRemovedEvent>;

export interface CalendarFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CalendarFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createCalendar(
      _profile: ProfileStruct,
      _availability: AvailabilityStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userToCalendar(arg0: string, overrides?: CallOverrides): Promise<[string]>;
  };

  createCalendar(
    _profile: ProfileStruct,
    _availability: AvailabilityStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userToCalendar(arg0: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createCalendar(
      _profile: ProfileStruct,
      _availability: AvailabilityStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    remove(overrides?: CallOverrides): Promise<void>;

    userToCalendar(arg0: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CalendarCreated(address,address)"(
      calendar?: string | null,
      owner?: string | null
    ): CalendarCreatedEventFilter;
    CalendarCreated(
      calendar?: string | null,
      owner?: string | null
    ): CalendarCreatedEventFilter;

    "CalendarRemoved(address,address)"(
      calendar?: string | null,
      owner?: string | null
    ): CalendarRemovedEventFilter;
    CalendarRemoved(
      calendar?: string | null,
      owner?: string | null
    ): CalendarRemovedEventFilter;
  };

  estimateGas: {
    createCalendar(
      _profile: ProfileStruct,
      _availability: AvailabilityStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userToCalendar(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createCalendar(
      _profile: ProfileStruct,
      _availability: AvailabilityStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userToCalendar(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
