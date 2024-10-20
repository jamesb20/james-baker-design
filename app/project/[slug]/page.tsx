'use client'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import Project from '../../../components/1project-template/project-template'
import { useRouter } from 'next/router'

export default function Test({ params, searchParams }: any) {
    const fileName = SearchParamsContext.displayName

    return <div>
        <Project fileName={params.slug} fileLen={searchParams.fileLen} />
    </div>
}