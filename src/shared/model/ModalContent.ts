export interface ModalContent {
    title: string
    component: () => unknown
    arguments?: unknown
}
