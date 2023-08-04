import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddPost, DeletePostfn, UpdatePostfn, getAllPosts } from "./Api";
export const useGetPosts = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: ({ signal }) => getAllPosts(signal),
    select: (res) => res,
  });
  return { posts, isLoading, isError, error };
};

export const useAddPost = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: isCreating,
    isSuccess: isSuccessCreating,
    isError: isErrorCreating,
    error: errorCreateing,
    mutate: CreatePost,
  } = useMutation((data) => AddPost(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["post"]);
    },
  });

  return {
    isCreating,
    isSuccessCreating,
    isErrorCreating,
    errorCreateing,
    CreatePost,
  };
};
//
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: isUpdating,
    isSuccess: isSuccessUpdating,
    isError: isErrorUpdating,
    error: errorUpdating,
    mutate: UpdatePost,
  } = useMutation((data) => UpdatePostfn(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(["post"]);
      queryClient.refetchQueries(["post"]);
    },
  });
  return {
    isUpdating,
    isSuccessUpdating,
    isErrorUpdating,
    errorUpdating,
    UpdatePost,
  };
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: isDeleting,
    isSuccess: isSuccessDeleting,
    mutate: DeletePost,
  } = useMutation((id) => DeletePostfn(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["post"]);
      queryClient.refetchQueries(["post"]);
    },
  });
  return {
    isDeleting,
    isSuccessDeleting,
    DeletePost,
  };
};
