import { computed } from "vue";
import { useRoute } from "vue-router"
declare const _github_edit_base_url_: string;

export function useGithubEditUrl() {
    const route = useRoute();
    return computed(() => {
        let editPath = route.query["edit"];
        let githubEditUrl = _github_edit_base_url_;
        return githubEditUrl + editPath;
    });
}

export function useGithubEditTitle() {
    const route = useRoute();
    return computed(() => {
        let editTitle = route.query["t"];
        return editTitle;
    })
}