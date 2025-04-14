
export default async function Page() {
  const res = await fetch('https://dummyjson.com/comments');
  const data = await res.json();
  const comments = data.comments;
  const sliceComment = comments.slice(0,12)
  

  return (
    <div className="p-8 min-h-screen font-serif">
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-50">What People Are Saying...</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sliceComment.map((comment) => (
          <div
            key={comment.id}
            className="border border-purple-950  p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-white mb-4">"{comment.body}"</p>
            <div className="text-sm text-white flex justify-between items-center">
              <span>— {comment.user.fullName}</span>
              <span className="text-pink-600">❤️ {comment.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

