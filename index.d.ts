/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function init(appId: number): void
export function runCallbacks(): void
export function getSteamId(): LocalSteamId
export function getName(): string
export function activateAchievement(achievement: string): boolean
export function isCloudEnabledForAccount(): boolean
export function isCloudEnabledForApp(): boolean
export function readFile(name: string): string
export function writeFile(name: string, content: string): boolean
export function deleteFile(name: string): boolean
export class LocalSteamId {
  steamId64: string
  steamId32: string
  accountId: number
}
