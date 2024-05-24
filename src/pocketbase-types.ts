/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agents = "agents",
	Maisons = "maisons",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgentsRecord = {
	email?: string
	nomAgent?: string
	prenomAgent?: string
	tel?: number
}

export enum MaisonsFavoriOptions {
	"true" = "true",
	"false" = "false",
}
export type MaisonsRecord = {
	adresse?: string
	agent: RecordIdString
	favori?: MaisonsFavoriOptions
	images?: string
	nbChambres?: number
	nbSdb?: number
	nomMaison?: string
	prix?: number
	surface?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgentsResponse<Texpand = unknown> = Required<AgentsRecord> & BaseSystemFields<Texpand>
export type MaisonsResponse<Texpand = unknown> = Required<MaisonsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agents: AgentsRecord
	maisons: MaisonsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agents: AgentsResponse
	maisons: MaisonsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agents'): RecordService<AgentsResponse>
	collection(idOrName: 'maisons'): RecordService<MaisonsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
