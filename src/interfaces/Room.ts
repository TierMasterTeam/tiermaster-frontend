import type RoomUser from '@/interfaces/RoomUser'
import type { RoomTierList } from '@/interfaces/RoomTierlist'

export default interface Room {
  users: RoomUser[]
  tierlist: RoomTierList
}
