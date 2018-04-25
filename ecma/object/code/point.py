class Point:

  def __init__(self, x, y):
    self.x = x
    self.y = y


p = Point(x=1, y=3)
print("%d, %d" % (p.x, p.y))