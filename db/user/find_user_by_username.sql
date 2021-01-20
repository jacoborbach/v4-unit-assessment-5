select * from helo_users
-- RIGHT JOIN helo_posts h on id=h.author_id
where username = $1;

-- alternatively (if I dont need the helo_posts table, I can just take that line out)