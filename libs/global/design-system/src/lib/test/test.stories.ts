import { TestComponent } from './test.component'

export default {
    title: 'Atoms/Test'
}

export const primary = () => ({
    moduleMetadata: {
        imports: []
    },
    component: TestComponent,
    props: {

    }
})