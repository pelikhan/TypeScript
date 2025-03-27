import {
    ApplicableRefactorInfo,
    arrayFrom,
    flatMapIterator,
    InteractiveRefactorArguments,
    Refactor,
    RefactorContext,
    RefactorEditInfo,
} from "./_namespaces/ts.js";
import { refactorKindBeginsWith } from "./_namespaces/ts.refactor.js";

// A map with the refactor code as key, the refactor itself as value
// e.g.  nonSuggestableRefactors[refactorCode] -> the refactor you want
const refactors = new Map<string, Refactor>();

/**
 * @param name An unique code associated with each refactor. Does not have to be human-readable.
 *
 * @internal
 */
export function registerRefactor(name: string, refactor: Refactor): void {
    refactors.set(name, refactor);
}

/**
 * Retrieves a list of applicable refactors based on the provided context.
 * Filters out refactors if the cancellation token is triggered or if the refactor kinds do not match the specified context kind.
 * Includes interactive actions if specified.
 * 
 * @param context The context in which refactors are being retrieved.
 * @param includeInteractiveActions Whether to include interactive refactor actions.
 */
export function getApplicableRefactors(context: RefactorContext, includeInteractiveActions?: boolean): ApplicableRefactorInfo[] {
    return arrayFrom(flatMapIterator(refactors.values(), refactor =>
        context.cancellationToken && context.cancellationToken.isCancellationRequested() ||
            !refactor.kinds?.some(kind => refactorKindBeginsWith(kind, context.kind)) ? undefined :
            refactor.getAvailableActions(context, includeInteractiveActions)));
}

/**
 * Retrieves the edits for a specific refactor action if available.
 * 
 * @param context The context in which the refactor is being performed.
 * @param refactorName The unique name of the refactor to retrieve edits for.
 * @param actionName The specific action within the refactor to retrieve edits for.
 * @param interactiveRefactorArguments Optional arguments for interactive refactor actions.
 * @returns The edits for the specified refactor action, or undefined if not available.
 * @internal
 */
export function getEditsForRefactor(context: RefactorContext, refactorName: string, actionName: string, interactiveRefactorArguments?: InteractiveRefactorArguments): RefactorEditInfo | undefined {
    const refactor = refactors.get(refactorName);
    return refactor && refactor.getEditsForAction(context, actionName, interactiveRefactorArguments);
}
