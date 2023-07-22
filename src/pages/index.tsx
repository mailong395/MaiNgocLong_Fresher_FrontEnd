/* eslint-disable prettier/prettier */
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs.Root className="TabsRoot" defaultValue="tab1">
            <Tabs.List className="" aria-label="Manage your account">
              <Tabs.Trigger
                className="rounded-full border-2 border-gray-200 px-6 py-3 text-center text-sm font-bold not-italic leading-5 hover:bg-gray-500 data-[state=active]:border-0 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value="tab1"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-1 mx-2 rounded-full border-2 border-gray-200 px-6 py-3 text-center text-sm font-bold not-italic leading-5 hover:bg-gray-500 data-[state=active]:border-0 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value="tab2"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-1 rounded-full border-2 border-gray-200 px-6 py-3 text-center text-sm font-bold not-italic leading-5 hover:bg-gray-500 data-[state=active]:border-0 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value="tab3"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="pt-10" value="tab1">
              <TodoList param={''} />
            </Tabs.Content>
            <Tabs.Content className="pt-10" value="tab2">
              <TodoList param={'pending'} />
            </Tabs.Content>
            <Tabs.Content className="pt-10" value="tab3">
              <TodoList param={'completed'} />
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
